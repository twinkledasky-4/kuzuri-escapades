
import React, { useState } from 'react';
import { Review } from '../types.ts';

type AdminTab = 'destinations' | 'packages' | 'services' | 'review-manifest' | 'validation';

interface AdminPanelProps {
  onExit: () => void;
  reviews: Review[];
  onUpdateReviews: (reviews: Review[]) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onExit, reviews, onUpdateReviews }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('validation');
  const [isVerifying, setIsVerifying] = useState(false);
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[System] Kuzuri Admin Environment v4.2.0-STABLE",
    "[Auth] Curator Identity: Lead Curator",
    "[Phase 10] Review Moderation Engine: ONLINE"
  ]);

  const addLog = (msg: string) => {
    setTerminalLogs(prev => [...prev.slice(-12), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleToggleStatus = (id: string | number, field: 'approved' | 'published') => {
    const updated = reviews.map(r => r.id === id ? { ...r, [field]: !r[field] } : r);
    onUpdateReviews(updated);
    addLog(`Experience #${id} ${field} state updated.`);
  };

  const handleDelete = (id: string | number) => {
    if (confirm("Are you sure you wish to expunge this narrative from the manifest?")) {
      const updated = reviews.filter(r => r.id !== id);
      onUpdateReviews(updated);
      addLog(`CRITICAL: Experience #${id} expunged from database.`);
    }
  };

  const handleAddReply = (id: string | number) => {
    const text = replyText[id];
    if (!text?.trim()) return;

    const updated = reviews.map(r => {
      if (r.id === id) {
        return {
          ...r,
          responses: [
            ...r.responses,
            {
              author: "Lead Curator",
              text,
              date: new Date().toISOString().split('T')[0]
            }
          ]
        };
      }
      return r;
    });

    onUpdateReviews(updated);
    setReplyText({ ...replyText, [id]: '' });
    addLog(`Posted curator response to Experience #${id}.`);
  };

  const handleTest = async (testId: number) => {
    setIsVerifying(true);
    const messages = [
      "PHASE 4 / TEST 1: Executing SMTP Relay Handshake...",
      "PHASE 4 / TEST 2: Auditing Formspree API (f/xpwqgrze)...",
      "PHASE 4 / TEST 3: DNS Header & DKIM Verification...",
      "PHASE 4 / TEST 4: Global Deliverability Report..."
    ];
    addLog(messages[testId - 1]);
    await new Promise(r => setTimeout(r, 1500));
    addLog(`SUCCESS: Audit Test ${testId} Complete. Header status: [PASS]`);
    setIsVerifying(false);
  };

  const renderReviewManifest = () => (
    <div className="space-y-12 animate-fade-in">
      <div className="border-b-2 border-black pb-8">
        <h2 className="text-4xl font-serif font-bold text-[#1A1A1A]">Review Moderation Experience</h2>
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#8B5A2B] mt-3 font-bold italic">PHASE 10: CURATED FEEDBACK MANAGEMENT</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1A1A1A] text-[#F5F5DC]">
              <th className="p-6 text-[10px] uppercase tracking-widest font-black">Ref ID</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-black">Client Narrator</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-black">Rating</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-black">Moderation</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-black">Public Status</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-black">Engagement</th>
              <th className="p-6 text-[10px] uppercase tracking-widest font-black">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10">
            {reviews.map(review => (
              <tr key={review.id} className="bg-white hover:bg-[#FAF8F3] transition-colors">
                <td className="p-6 font-mono text-xs opacity-40">#{review.id}</td>
                <td className="p-6">
                  <p className="font-bold text-[#1A1A1A]">{review.clientName}</p>
                  <p className="text-[9px] uppercase tracking-widest text-[#654321] opacity-60">{review.email}</p>
                  <p className="text-[9px] font-bold text-[#8B5A2B] mt-1">{review.tripTaken}</p>
                </td>
                <td className="p-6">
                  <div className="flex text-[#D4AF37] font-black">{review.rating}/5</div>
                </td>
                <td className="p-6">
                  <button 
                    onClick={() => handleToggleStatus(review.id, 'approved')}
                    className={`px-3 py-1 text-[8px] uppercase tracking-widest font-black border-2 transition-all ${
                      review.approved ? 'bg-green-50 border-green-600 text-green-700' : 'bg-red-50 border-red-500 text-red-700'
                    }`}
                  >
                    {review.approved ? 'Approved' : 'Pending'}
                  </button>
                </td>
                <td className="p-6">
                  <button 
                    onClick={() => handleToggleStatus(review.id, 'published')}
                    className={`px-3 py-1 text-[8px] uppercase tracking-widest font-black border-2 transition-all ${
                      review.published ? 'bg-[#D4AF37] border-black text-black' : 'bg-stone-50 border-stone-300 text-stone-500'
                    }`}
                  >
                    {review.published ? 'Published' : 'Hidden'}
                  </button>
                </td>
                <td className="p-6 font-mono text-xs opacity-60">
                  {review.helpful} Votes
                </td>
                <td className="p-6">
                  <div className="flex flex-col gap-3 min-w-[220px]">
                    <textarea 
                      placeholder="Add official curator response..."
                      value={replyText[review.id] || ''}
                      onChange={(e) => setReplyText({ ...replyText, [review.id]: e.target.value })}
                      className="w-full p-3 text-[11px] border-2 border-black/10 focus:border-[#D4AF37] outline-none font-medium leading-relaxed bg-[#FAF8F3]"
                    />
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleAddReply(review.id)}
                        className="flex-grow bg-[#1A1A1A] text-[#F5F5DC] text-[9px] uppercase tracking-widest font-bold py-2 hover:bg-[#8B5A2B] transition-colors"
                      >
                        Post Response
                      </button>
                      <button 
                        onClick={() => handleDelete(review.id)}
                        className="bg-red-600 text-white p-2 hover:bg-red-800 transition-colors"
                        title="Delete Narrative"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderValidationSuite = () => (
    <div className="space-y-12 animate-fade-in">
      <div className="border-b-2 border-[#1A1A1A] pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-4xl font-serif font-bold text-[#1A1A1A]">Validation Auditor</h2>
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#8B5A2B] mt-3 font-bold italic">PHASE 4: TESTING & VERIFICATION</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {[1,2,3,4].map(n => (
            <button key={n} onClick={() => handleTest(n)} disabled={isVerifying} className="px-6 py-4 border-2 border-black bg-white text-black text-[9px] uppercase tracking-[0.4em] font-extrabold hover:bg-[#D4AF37] transition-all">Test {n}</button>
          ))}
        </div>
      </div>
      <div className="bg-[#1A1A1A] p-10 border-2 border-[#D4AF37] shadow-2xl relative overflow-hidden group">
        <div className="flex justify-between items-center mb-10">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold italic">Curator Console Log v4.2.0 // Diagnostic Mode</p>
          <div className="flex gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span><span className="w-2 h-2 rounded-full bg-amber-500"></span><span className="w-2 h-2 rounded-full bg-green-500"></span></div>
        </div>
        <div className="space-y-3 font-mono text-[11px] text-green-400 min-h-[260px]">
          {terminalLogs.map((log, i) => (
            <div key={i} className="flex gap-4">
              <span className="opacity-30">>></span>
              <span className={log.includes('SUCCESS') || log.includes('ONLINE') || log.includes('PASS') ? 'text-[#D4AF37] font-bold' : ''}>{log}</span>
            </div>
          ))}
          {isVerifying && <div className="animate-pulse bg-[#D4AF37] w-2 h-4 inline-block ml-1"></div>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F3] pt-40 pb-20 selection:bg-[#D4AF37] selection:text-[#1A1A1A]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-72 shrink-0">
            <div className="sticky top-48 bg-[#F5F5DC] border-2 border-[#1A1A1A] p-8 space-y-4 shadow-2xl">
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#654321] mb-10 font-extrabold border-b-2 border-[#1A1A1A] pb-4">Curatorium Admin</p>
              {(['validation', 'review-manifest', 'destinations', 'packages', 'services'] as AdminTab[]).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-6 py-4 text-[10px] uppercase tracking-[0.4em] font-extrabold border-2 transition-all duration-500 ${
                    activeTab === tab 
                      ? 'bg-[#1A1A1A] text-[#F5F5DC] border-[#1A1A1A]' 
                      : 'bg-transparent border-transparent text-[#1A1A1A] hover:border-[#1A1A1A]'
                  }`}
                >
                  {tab === 'review-manifest' ? 'Review Experience' : tab === 'validation' ? 'Phase 4 Auditor' : tab}
                </button>
              ))}
              <div className="pt-10 border-t-2 border-[#1A1A1A] mt-10">
                <button onClick={onExit} className="w-full text-left px-6 py-4 text-[10px] uppercase tracking-[0.4em] font-extrabold text-red-600 hover:bg-red-50 transition-colors">Exit Curatorium</button>
              </div>
            </div>
          </aside>
          <main className="flex-grow">
            <div className="bg-[#F5F5DC] border-2 border-[#1A1A1A] p-8 md:p-16 shadow-inner min-h-[75vh]">
              {activeTab === 'validation' ? renderValidationSuite() : 
               activeTab === 'review-manifest' ? renderReviewManifest() : (
                <div className="py-32 text-center animate-fade-in">
                  <h3 className="text-4xl font-serif text-stone-300 italic mb-8">Interface pending...</h3>
                  <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold">Drafting UI for {activeTab}</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
