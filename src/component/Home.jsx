import { useRef, useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react";
const Home = () => {
    let btncolor = useRef()

    const [count, setCount] = useState(0);
    const timerRef = useRef(null)


    function setcolor() {
        if (btncolor.current.style.backgroundColor === "red") {
            btncolor.current.style.backgroundColor = "blue"
        } else {
            btncolor.current.style.backgroundColor = "red";
        }
    }

    function playtimer() {
        if (timerRef.current !== null) return;
        timerRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000)
    }

    function pausetimer() {
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    function cleartimer() {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setCount(0);
    }

    const inputRef = useRef(null);


    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    return (
        <>
            <section className="min-h-150 flex flex-col bg-amber-200 items-center justify-center">
                <h1 className="text-black font-bold text-center mb-9 text-4xl">MADE IN INDA</h1>

                <div className="container flex justify-center gap-7">
                    <button onClick={setcolor}
                        className="group relative rounded-xl cursor-pointer bg-purple-600 px-8 py-4 font-bold text-white
  shadow-[0_7px_0_#4C1D95,0_12px_25px_rgba(124,58,237,0.3)]
  transition-all duration-200 ease-out
  hover:-translate-y-1 hover:bg-fuchsia-500
  hover:shadow-[0_9px_0_#86198F,0_18px_35px_rgba(217,70,239,0.4)]
  active:translate-y-1
  active:shadow-[0_2px_0_#4C1D95,0_5px_12px_rgba(124,58,237,0.25)]"
                    >
                        <span className="inline-flex items-center gap-2">
                            ColorChange
                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </span>
                    </button>

                    <button
                        ref={btncolor}
                        onClick={setcolor}
                        style={{ backgroundColor: "red" }}
                        className="py-3 animate-float rounded-3xl px-6 text-white font-bold"
                    >
                        DJ LIGHT
                    </button>
                </div>
            </section>
            <section className="min-h-150 bg-purple-200 flex items-center justify-center">
                <div className="container w-full flex flex-col items-center">
                    <h1 className="text-center font-bold text-4xl mb-9">Timer Create BY - RAJAT</h1>
                    <div className="row">
                        <h1 className="font-bold text-3xl text-center mb-6">{count}</h1>
                        <div className="flex gap-5">
                            <button onClick={playtimer} className="py-3 px-6 bg-purple-500 text-white rounded-4xl cursor-pointer font-bold">Play</button>
                            <button onClick={pausetimer} className="py-3 px-6 bg-purple-500 text-white rounded-4xl cursor-pointer font-bold">Pause</button>
                            <button onClick={cleartimer} className="py-3 px-6 bg-purple-500 text-white rounded-4xl cursor-pointer font-bold">Clear</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-150 bg-blue-300 flex justify-center items-center">
                <div className="container flex justify-center items-center">
                    <div className="row">
                        <h1 className="font-bold text-3xl text-center mb-6">Auto-Focus Input</h1>

                        <div className="py-2 px-6 border-2 border-black rounded-3xl cursor-pointer"><input ref={inputRef} type="text" placeholder="Enter your name" className="outline-none" /></div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-lg w-80">
                    <h2 className="text-2xl font-bold mb-5">Login</h2>

                    <label className="block mb-2">Password</label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full border p-3 pr-11 rounded-lg outline-none focus:border-blue-500"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
