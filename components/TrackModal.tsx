'use client';

import { useState } from 'react';

type Props = {
  onClose: () => void;
};

export default function TrackModal({ onClose }: Props) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`/api/track?number=${trackingNumber}`);
      const data = await res.json();
      setStatus(data.status || 'No status found for this tracking number.');
    } catch {
      setStatus('Unable to fetch tracking data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-blue-700">Track Your Shipment</h2>

        <input
          type="text"
          placeholder="Enter tracking number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="w-full border px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleTrack}
          disabled={!trackingNumber || loading}
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
        >
          {loading ? 'Tracking...' : 'Track Now'}
        </button>

        {status && (
          <p className="mt-4 text-center text-gray-700">
            <strong>Status:</strong> {status}
          </p>
        )}
      </div>
    </div>
  );
}
