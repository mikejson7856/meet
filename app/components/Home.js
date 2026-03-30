"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { FaMicrophoneSlash, FaVideoSlash, FaChevronDown } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

function Home({ adminId, posterId }) {
  useEffect(() => {
    Cookies.set("adminId", adminId);
    Cookies.set("posterId", posterId);
  }, [adminId, posterId]);

  const router = useRouter();

  const handleJoin = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#3c4043]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-transparent">
        <div className="flex items-center gap-2">
          <img
            src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_233e41d0bec479a0.png"
            alt="Google Meet"
            className="h-8 md:h-10"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#5f6368] flex items-center justify-center text-white text-lg font-medium cursor-pointer">
            C
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 py-8 max-w-7xl mx-auto w-full">
        {/* Left Side: Video Preview */}
        <div className="w-full md:w-[60%] aspect-video bg-[#202124] rounded-lg relative overflow-hidden shadow-lg flex items-center justify-center">
          {/* Placeholder/Black screen */}
          <div className="w-full h-full flex flex-col items-center justify-center">
             {/* This space would normally show the webcam feed */}
          </div>

          {/* Controls Area */}
          <div className="absolute bottom-6 flex gap-4">
            {/* Mic Button */}
            <div className="relative group">
              <button className="w-12 h-12 rounded-full bg-[#ea4335] flex items-center justify-center text-white hover:bg-[#d93025] transition-colors">
                <FaMicrophoneSlash size={20} />
              </button>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#f9ab00] rounded-full border-2 border-[#202124] flex items-center justify-center text-[#202124] font-bold text-[10px]">
                !
              </div>
            </div>
            {/* Camera Button */}
            <div className="relative group">
              <button className="w-12 h-12 rounded-full bg-[#ea4335] flex items-center justify-center text-white hover:bg-[#d93025] transition-colors">
                <FaVideoSlash size={20} />
              </button>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#f9ab00] rounded-full border-2 border-[#202124] flex items-center justify-center text-[#202124] font-bold text-[10px]">
                !
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Join Controls */}
        <div className="w-full md:w-[35%] flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-2xl md:text-3xl font-medium text-[#202124]">
            Ready to join?
          </h1>

          <div className="w-full flex flex-col gap-4">
            <button
              onClick={handleJoin}
              className="w-full h-12 bg-[#1a73e8] hover:bg-[#1b66c9] text-white font-medium rounded-full transition-shadow shadow-sm hover:shadow-md"
            >
              Ask to join
            </button>

            <button className="w-full h-12 border border-[#dadce0] text-[#1a73e8] font-medium rounded-full flex items-center justify-center gap-2 hover:bg-[#f8f9fa] transition-colors">
              Other ways to join
              <FaChevronDown size={14} />
            </button>
          </div>

          <div className="w-full pt-8 mt-4 border-t border-[#dadce0] flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#5f6368]">Meeting code</span>
              <span className="font-medium text-[#202124]">my-meeting-ajx69</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#5f6368]">Meeting link</span>
              <button className="text-[#1a73e8] font-medium flex items-center gap-1 hover:underline">
                Copy
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-[12px] text-[#5f6368]">
        <p className="hover:underline cursor-pointer">
          Learn more about joining and terms
        </p>
      </footer>
    </div>
  );
}

export default Home;
