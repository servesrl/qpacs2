window.config = {
  routerBasename: '/',
  showStudyList: true,
  servers: {
    dicomWeb: [
      {
        name: 'orthanc',
        wadoUriRoot: 'https://192.168.30.13:8443/orthanc/wado',
        qidoRoot: 'https://192.168.30.13:8443/orthanc/dicom-web',
        wadoRoot: 'https://192.168.30.13:8443/orthanc/dicom-web',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        requestOptions: {
          requestFromBrowser: true,
		  auth: 'serve:serveritegno',
		  logRequests: true,
		  logResponses: false,
		  logTiming: true
        },
      },
    ],
  },
};
