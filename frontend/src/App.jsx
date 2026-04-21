import React, { useState } from 'react';

function App() {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState('Ready to Track');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 font-mono">
      {/* Funky Dashboard Container */}
      <div className="border-4 border-lime-400 p-8 bg-zinc-900 shadow-[10px_10px_0px_0px_#ADFF2F] max-w-lg w-full">
        <h1 className="text-4xl font-black italic mb-2 text-lime-400 uppercase">FluxLogi</h1>
        <p className="text-sm mb-6 text-zinc-400">Smart Logistics // v1.0.4</p>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="ENTER TRACKING ID..." 
            className="w-full bg-black border-2 border-white p-4 text-xl outline-none focus:border-lime-400"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          
          <button 
            className="w-full bg-lime-400 text-black font-black py-4 hover:bg-white transition-colors"
            onClick={() => setStatus(`Searching for ${trackingId}...`)}
          >
            LOCATE SHIPMENT
          </button>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-zinc-800">
          <p className="text-xs uppercase text-zinc-500 mb-1">Live Status</p>
          <p className="text-xl font-bold">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default App;