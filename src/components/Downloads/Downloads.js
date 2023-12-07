import React from "react";

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
