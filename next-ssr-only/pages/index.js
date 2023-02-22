import dynamic from "next/dynamic";

const Index = dynamic (() => import('../src/app'), { ssr : false });

function App() {
  return (
	  <Index />
  );
}

export default App;
