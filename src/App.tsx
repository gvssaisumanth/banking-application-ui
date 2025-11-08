import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import { HomePage } from "./components/HomePage/HomePage.tsx";
import { CreateAccountPage } from "./components/CreateAccountPage/CreateAccountPage";
import { ROUTES } from "./models/Routes.ts";
import { QueryProvider } from "./queries/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route
              path={ROUTES.CREATE_ACCOUNT}
              element={<CreateAccountPage />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryProvider>
  );
}

export default App;
