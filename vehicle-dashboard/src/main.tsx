/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "styles/global.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "Store/store";
import ScreenLoader from "components/screen-components/loader";

const LazyApp = lazy(() => import("./App"));
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<ScreenLoader />}>
          <LazyApp />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>
);
