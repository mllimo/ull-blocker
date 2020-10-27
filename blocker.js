"use strict";
/*
El timeout no me gusta nada. He probado con "MutationObserver" y "onchange" pero nada.
*/

let intervalCall;
const INTERVAL_TIME = 200;

function getSurveyContent() {
  return document.getElementsByClassName("modal-content")[0];
}

function getCloseButton(surveyContent) {
  if (surveyContent == undefined)
    throw "Han cambiado el nombre del container :(";
  return surveyContent.getElementsByClassName("close")[0];
}

function closeSurvey() {
  let surveyContent = getSurveyContent();
  let closeButton = getCloseButton(surveyContent);
  if (closeButton == undefined)
    throw "No hay ningún botón para cerrar la pestaña";
  closeButton.click();
}


async function run() {
  intervalCall = setInterval(() => {
    try {
      closeSurvey();
    } catch (err) {
      console.error(err);
    }
  }, INTERVAL_TIME);
}

document.addEventListener("DOMContentLoaded", run);
