import React, { useContext, useState } from "react";

import one from "../../assests/downloads/one.doc";

import { DownloadProvider } from "../../context/DownloadContext";

import Main from "./Main";

const Downloads = () => {
  return (
    <DownloadProvider>
      <Main />
    </DownloadProvider>
  );
};

export default Downloads;
