import React, { useEffect } from "react";
import {useState} from "react";
export const Text=()=>{
    const[text,setText]=useState("");
    useEffect(()=>{
console.log("COMPONENT MOUNTED");
 //   },[]);//[] mounting  [text]mounting and updating
    return()=>{
        console.log("COMPONENT UNMOUNTED");
    };
},[]);

    return(
        <div>
            <input
            onChange={(event)=>{
                setText(event.target.value);
            }}
            />
            <h1>{text}</h1>
        </div>
    );
};