import DSAList from "./components/DSAList.js"; 
<script src="https://cdn.tailwindcss.com"></script>
export default function App() { 
    return ( 
        <> 
            <div className="flex flex-col justify-center items-center mt-4"> 
                <h1 className="text-blue-800 font-bold text-7xl"> 
                    Pro-Track-Ter 
                </h1> 
                <h3 className="bg-clip-text text-transparent bg-blue-500 font-bold text-3xl mb-4"> 
                    DSA Tracker 
                </h3> 
                <DSAList /> 
            </div> 
        </> 
    ); 
}