// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

function calculate() {
  // process
  const theAge = parseInt(document.getElementById("age").value);
  const day = document.getElementById("days").checked;

  // input
  if  ( day == "3" || day == "5" || (theAge > 12 && theAge < 21)) {
  
    // output
  
    document.getElementById("results").innerHTML =
      "<p>You are eligible for a student discount.</p>";
  } 
  else {
    document.getElementById("results").innerHTML =
      "<p>You must pay full price.</p>";
  }
}