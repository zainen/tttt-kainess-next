"use client";
import { useState } from "react";
import { Card } from "./Card";
import { Spinner } from "./Spinner";

export const PodcastYoutube = (props: { url: string; orderReverse?: boolean; title: string; description: string; }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Card className={`mt-6 lg:my-12 px-4 md:px-8 bg-primary-100 flex flex-col justify-center items-center md:flex-row ${props.orderReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full flex relative">
        <iframe 
        className="w-full h-60"
        src={props.url} 
        title={props.url} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        loading="eager"
        onLoad={() => setIsLoading(false)}
        ></iframe>
        <div className="absolute left-1/2 top-1/2 ">
          {isLoading && <Spinner color="border-t-primary-300" />}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center text-primary-400 p-4 md:p-10 ">
        <h2 className="font-bold text-xl text-center">{props.title}</h2>
        <p className="text-center text-lg">{props.description}</p>
      </div>
    </Card>
  )
}

export const PodcastSpotify = (props: { url: string; orderReverse?: boolean; title: string; description: string; }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card className={`mt-6 lg:mt-12 px-4 md:px-8 bg-primary-100 flex flex-col justify-center items-center md:flex-row ${props.orderReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* TODO debug onload does not happen for spotify iframe */}
      {/* {isLoading && <Spinner color="border-t-primary-300" />} */}
      <iframe 
        style={{borderRadius: '12px'}}
        src={props.url} 
        width="100%" 
        height="352" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="eager"
        // Does not work
        onLoad={() => setIsLoading(false)}
        title={props.url}
      ></iframe>
      <div className="w-full flex flex-col justify-center items-center text-primary-400 p-4 md:p-10 ">
        <h2 className="font-bold text-xl text-center">{props.title}</h2>
        <p className="text-center text-lg">{props.description}</p>
      </div>
    </Card>
  )
}