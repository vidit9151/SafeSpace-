import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="relative">
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </div>
);
