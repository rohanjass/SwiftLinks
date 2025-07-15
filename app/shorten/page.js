"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import { ToastContainer, toast } from "react-toastify";
const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const qrRef = useRef(null);



  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        console.log(result);
        if (result?.message) {
          toast.success("Short link generated successfully!");
        }
      })
      .catch((error) => {
        toast.error("Error generating link");
        console.error(error);
      });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link.");
    }
  };

  const downloadQRCode = () => {
    try {
      const canvas = qrRef.current.querySelector("canvas");
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qr-code.png";
      downloadLink.click();
      toast.success("QR Code saved to device!");
    } catch (err) {
      toast.error("Failed to save QR Code.");
    }
  };

  return (
    <section className="h-142">
    <div className="mx-auto max-w-lg  bg-cyan-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URL</h1>
      <div className="flex flex-col gap-2">
        <input
          className="px-4 py-2 focus:outline-cyan-600 rounded-md"
          type="text"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          className="px-4 py-2 focus:outline-cyan-600 rounded-md"
          type="text"
          value={shortUrl}
          placeholder="Enter your preferred short URL"
          onChange={(e) => {
            setShortUrl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-cyan-500 rounded-lg shadow-lg px-3 py-1 font-bold text-white"
        >
          Generate
        </button>
      </div>
          <ToastContainer/>
      {generated && (
        <>
          <span className="font-bold text-lg">Your link </span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
          <button
            onClick={copyToClipboard}
            className="ml-4 px-3 py-1 bg-cyan-600 text-white rounded hover:bg-cyan-800"
          >
            Copy
          </button>
          
          <div ref={qrRef} className="flex gap-4 justify-around items-center mt-4">
            <p className="font-semibold mb-2">QR Code:</p>
            <QRCodeCanvas value={generated} size={128} />
            <button
              onClick={downloadQRCode}
              className="mt-3 px-3 py-1 bg-cyan-600 text-white rounded hover:bg-cyan-700"
            >
              Save to device
            </button>
          </div>
        </>
      )}
    </div>
    </section>
  );
};

export default Shorten;
