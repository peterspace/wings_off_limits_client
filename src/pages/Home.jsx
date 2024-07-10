import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HomeDesktop from "./HomeDesktop";

import {
  signUpOTPVerificationEvent,
  signUpPhoneNumberEvent,
  landingPageEvent,
  kycUploadEvent,
  leadEvent,
  purchaseEvent,
  purchaseEventStandard,
} from "../../utils/FacebookPixelEvents";

//http://localhost:5173/purchase/123/user245

const defaultUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
const defaultIP = "192.168.1.1";
const Home = () => {
  const params = useParams();
  const { event, client_ip_address, fbclid, external_id, client_user_agent } =
    params;
  const backend = import.meta.env.VITE_BACKEND_URL;
  const [errorMessage, setErrorMessage] = useState();
  const [facebookResponse, setFacebookResponse] = useState();
  const [initialData, setInitialData] = useState();

  console.log({ leadParams: params });
  console.log({ initialData });
  console.log({ facebookResponse });
  console.log({ errorMessage });

  // useEffect(() => {
  //   landingPageEvent();
  // }, []);

  // //=================={Registration}==================
  useEffect(() => {
    if (event === "purchase") {
      sendPurchase();
      // purchaseEventStandard();
    }
    if (event === "lead") {
      sendLead();
    }
    if (event === "registration") {
      userRegistration();
    }
  }, [event]);

  // useEffect(() => {
  //   checkWindow();
  // }, []);

  // async function checkWindow() {
  //   if (typeof window !== "undefined" && window.fbq) {
  //     console.log({ window });
  //     console.log({ facebookLoaded: window.fbq });

  //     // window.fbq("init", "YOUR_PIXEL_ID"); // Replace with your Facebook Pixel ID
  //     // window.fbq("track", "PageView");
  //   }
  // }
  //new
  async function sendLead() {
    let userData = "";

    if (!event) {
      return;
    }

    if (client_ip_address || fbclid || external_id || client_user_agent) {
      userData = {
        client_ip_address: client_ip_address ? client_ip_address : defaultIP,
        fbclid: fbclid ? fbclid : null,
        external_id: external_id || "",
        client_user_agent: client_user_agent
          ? client_user_agent
          : defaultUserAgent,
      };

      setInitialData(userData);
      try {
        const data = await leadEvent(userData);
        setFacebookResponse("Lead event logged successfully");
        await sendPurchaseOnServer(); // send notification to server
        setInitialData(null);
      } catch (error) {
        // alert("Lead error");
        console.log({ error });
        setErrorMessage({ "Lead error": error });
        setInitialData(null);
      }
    }
  }

  async function sendPurchase() {
    let userData = "";
    if (!event) {
      return;
    }

    if (client_ip_address || fbclid || external_id || client_user_agent) {
      userData = {
        client_ip_address: client_ip_address ? client_ip_address : defaultIP,
        fbclid: fbclid ? fbclid : null,
        external_id: external_id || "",
        client_user_agent: client_user_agent
          ? client_user_agent
          : defaultUserAgent,
      };

      setInitialData(userData);
      try {
        // const data = purchaseEvent()
        const data = await purchaseEvent(userData);
        setFacebookResponse("Purchase event logged successfully");
        await sendPurchaseOnServer(); // send notification to server
        setInitialData(null);
      } catch (error) {
        // alert("Purchase error");
        console.log({ error });
        setErrorMessage({ "Purchase error": error });
        setInitialData(null);
      }
    }
  }

  async function userRegistration() {
    signUpOTPVerificationEvent();
    signUpPhoneNumberEvent();
  }

  async function sendPurchaseOnServer() {
    const url = `${backend}/facebook_event_notification?event=${event}`;

    try {
      const response = await axios.get(url);
      // if (response.data) {
      //   console.log({ response: response.data });
      // }
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      <HomeDesktop />
    </>
  );
};

export default Home;
