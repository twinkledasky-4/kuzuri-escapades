import React, { useState, useEffect, useMemo } from 'react';
import { Review, Lodge, LodgeGalleryItem } from '../types.ts';
import { cmsDatabase } from '../services/cmsService.ts';
import { crmService, Lead } from '../services/crmService.ts';
import { intelligenceService, PackageIntelligence } from '../services/analyticsService.ts';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Mail, 
  Compass, 
  ShieldCheck, 
  LogOut, 
  Edit3, 
  Save, 
  Plus, 
  X, 
  Trash2, 
  CheckCircle, 
  User, 
  Eye,
  Camera,
  Layout,
  Package,
  Activity
} from 'lucide-react';

type AdminTab = 'intelligence' | 'leads' | 'sanctuaries' | 'narratives';

interface AdminPanelProps {
  onExit: () => void;
  reviews: Review[];
  onUpdateReviews: (reviews: Review[]) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onExit, reviews, onUpdateReviews }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('intelligence');
  const [lodges, setLodges] = useState<Lodge[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [intelligence, setIntelligence] = useState<PackageIntelligence[]>([]);
  const [editingLodge, setEditingLodge] = useState<Lodge | null>(null);

  useEffect(() => {
    setLodges(cmsDatabase.getAdminAll());
    setLeads(crmService.getAllLeads());
    setIntelligence(intelligenceService.getRankedMetrics());
  }, []);

  const handleUpdateLeadStatus = (id: string, status: Lead['status']) => {
    crmService.updateLeadStatus(id, status);
    setLeads([...crmService.getAllLeads()]);
  };

  const handleDeleteLead = (id: string) => {
    if (confirm("Permanently expunge this lead from the registry?")) {
      crmService.deleteLead(id);
      setLeads([...crmService.getAllLeads()]);
    }
  };

  const handleSaveLodge = () => {
    if (editingLodge) {
      cmsDatabase.updateLodge(editingLodge.id, editingLodge);
      setLodges([...cmsDatabase.getAdminAll()]);
      setEditingLodge(null);
    }
  };

  const renderIntelligence = () => {
    const maxClicks = intelligence.length > 0 ? Math.max(...intelligence.map(i => i.clicks)) : 1;
    return (
      <div className="space-y-12 animate-fade-in">
        <div className="border-b border-white/10 pb-10">
          <h2 className="text-5xl font-serif font-bold text-white mb-4 uppercase tracking-tight">Intelligence <span className="text-[#D4AF37] italic font-light">Hub</span></h2>
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-black">Engagement Metrics & Global Interest</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Chart */}
          <div className="lg:col-span-8 bg-[#111] border border-white/5 p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-white/[0.02]">
              <TrendingUp size={200} strokeWidth={1} />
            </div>
            
            <div className="flex items-center gap-4 mb-16 relative z-10">
              <BarChart3 size={24} className="text-[#D4AF37]" />
              <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-widest">Package Popularity</h3>
            </div>

            <div className="space-y-10 relative z-10">
              {intelligence.length === 0 ? (
                <p className="text-white/20 italic font-serif text-xl py-20 text-center">Awaiting initial engagement data...</p>
              ) : (
                intelligence.slice(0, 6).map((item) => (
                  <div key={item.id} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <p className="text-[12px] font-black uppercase tracking-widest text-white">{item.label}</p>
                      <p className="text-[11px] font-mono font-bold text-[#D4AF37]">{item.clicks} EXPLORATIONS</p>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${item.id.includes('ngamba') || item.id.includes('prime') || item.id.includes('chimpanzee') ? 'bg-[#D4AF37]' : 'bg-white/40'}`}
                        style={{ width: `${(item.clicks / maxClicks) * 100}%` }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Rapid Stats */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-[#D4AF37] p-12 shadow-2xl flex-grow flex flex-col justify-center">
              <Package size={32} className="text-black/40 mb-6" />
              <p className="text-black text-[10px] uppercase tracking-[0.4em] font-black mb-4">Top Performer</p>
              <h4 className="text-3xl font-serif font-bold text-black leading-tight uppercase">
                {intelligence[0]?.label || 'Pending...'}
              </h4>
            </div>
            <div className="bg-white p-12 shadow-2xl flex-grow flex flex-col justify-center">
              <Activity size={32} className="text-[#D4AF37] mb-6" />
              <p className="text-[#8B5A2B] text-[10px] uppercase tracking-[0.4em] font-black mb-4">Conversion Rate</p>
              <h4 className="text-6xl font-serif font-bold text-black leading-none">
                {Math.round((leads.filter(l => l.status === 'booked').length / (leads.length || 1)) * 100)}%
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLeads = () => (
    <div className="space-y-12 animate-fade-in">
      <div className="border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-5xl font-serif font-bold text-white mb-4 uppercase tracking-tight">Lead <span className="text-[#D4AF37] italic font-light">Management</span></h2>
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-black">Incoming Visions & Conversion Funnel</p>
        </div>
        <div className="px-8 py-4 bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] uppercase font-black flex items-center gap-4">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           Active Registry: {leads.length}
        </div>
      </div>

      <div className="bg-[#111] border border-white/5 shadow-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-[#D4AF37] border-b border-white/10">
                <th className="p-8 text-[11px] uppercase tracking-widest font-black">Client Name</th>
                <th className="p-8 text-[11px] uppercase tracking-widest font-black">Email Address</th>
                <th className="p-8 text-[11px] uppercase tracking-widest font-black">Expedition Interest</th>
                <th className="p-8 text-[11px] uppercase tracking-widest font-black text-center">Status</th>
                <th className="p-8 text-[11px] uppercase tracking-widest font-black text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-32 text-center text-white/10 font-serif italic text-2xl">The horizon for inquiries is currently clear, Nasif.</td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                          <User size={16} />
                        </div>
                        <span className="font-bold text-white text-base tracking-tight">{lead.data.fullName || 'Private Client'}</span>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <Mail size={14} className="text-white/20" />
                        <a href={`mailto:${lead.data.email}`} className="text-sm font-medium text-white/60 hover:text-[#D4AF37] transition-colors underline underline-offset-4">{lead.data.email || 'N/A'}</a>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex flex-col gap-1">
                        <span className="text-[12px] font-black uppercase tracking-widest text-[#D4AF37]">
                          {lead.packageViewing || lead.data.tourType || 'Bespoke Exploration'}
                        </span>
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">REF: {lead.id}</span>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex justify-center gap-2">
                        {(['new', 'contacted', 'booked'] as const).map((s) => (
                          <button
                            key={s}
                            onClick={() => handleUpdateLeadStatus(lead.id, s)}
                            className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest border transition-all ${
                              lead.status === s
                                ? s === 'new' ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]' :
                                  s === 'contacted' ? 'bg-blue-600 border-blue-600 text-white' :
                                  'bg-green-600 border-green-600 text-white'
                                : 'bg-transparent border-white/10 text-white/20 hover:border-white/40 hover:text-white'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="p-8 text-right">
                      <div className="flex items-center justify-end gap-6">
                        <button onClick={() => alert(lead.data.message)} className="text-white/20 hover:text-white transition-colors" title="View Vision Narrative"><Eye size={18} /></button>
                        <button onClick={() => handleDeleteLead(lead.id)} className="text-white/10 hover:text-red-500 transition-colors" title="Delete Lead"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSanctuaries = () => (
    <div className="space-y-12 animate-fade-in">
      {editingLodge ? (
        <div className="bg-[#111] border border-white/10 p-12 md:p-20 shadow-3xl animate-fade-in">
          <div className="flex justify-between items-start mb-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.8em] text-[#D4AF37] font-black mb-6">CMS ARCHITECTURE</p>
              <h2 className="text-5xl font-serif font-bold text-white uppercase tracking-tight">Edit {editingLodge.name}</h2>
            </div>
            <button onClick={() => setEditingLodge(null)} className="p-4 bg-white/5 text-white/40 hover:text-white transition-all"><X size={24}/></button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 block">Sanctuary Name</label>
                <input 
                  type="text"
                  value={editingLodge.name}
                  onChange={(e) => setEditingLodge({ ...editingLodge, name: e.target.value })}
                  className="w-full bg-white/5 border-b-2 border-[#D4AF37]/30 p-5 outline-none focus:border-[#D4AF37] font-bold text-white text-xl uppercase tracking-tighter"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 block">Location Detail</label>
                <input 
                  type="text"
                  value={editingLodge.location}
                  onChange={(e) => setEditingLodge({ ...editingLodge, location: e.target.value })}
                  className="w-full bg-white/5 border-b-2 border-white/10 p-5 outline-none focus:border-[#D4AF37] font-bold text-white"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 block">Primary Narrative</label>
                <textarea 
                  rows={8}
                  value={editingLodge.description}
                  onChange={(e) => setEditingLodge({ ...editingLodge, description: e.target.value })}
                  className="w-full bg-white/5 border-b-2 border-white/10 p-5 outline-none focus:border-[#D4AF37] font-medium leading-relaxed text-white/80 resize-none"
                />
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40 block">Visual Identity (Main Image)</label>
                <div className="aspect-[16/9] bg-black border border-white/10 overflow-hidden mb-6 relative group">
                   <img src={editingLodge.imageUrl} alt="Lodge Preview" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={40} className="text-white/40" />
                   </div>
                </div>
                <input 
                  type="text"
                  placeholder="URL for main visual"
                  value={editingLodge.imageUrl}
                  onChange={(e) => setEditingLodge({ ...editingLodge, imageUrl: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-[#D4AF37] font-mono text-xs text-[#D4AF37]"
                />
              </div>

              <div className="space-y-6 pt-10 border-t border-white/10">
                <div className="flex justify-between items-center mb-8">
                  <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/40">Interior Fragments (Gallery)</label>
                  <button 
                    onClick={() => setEditingLodge({
                      ...editingLodge,
                      gallery: [...(editingLodge.gallery || []), { url: '', label: 'Interior Fragment' }]
                    })}
                    className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-black uppercase hover:text-white transition-colors"
                  >
                    <Plus size={16} /> Add Asset
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin">
                  {editingLodge.gallery?.map((item, idx) => (
                    <div key={idx} className="p-6 bg-white/5 border border-white/5 relative group">
                      <button 
                        onClick={() => setEditingLodge({
                          ...editingLodge,
                          gallery: editingLodge.gallery?.filter((_, i) => i !== idx)
                        })}
                        className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="aspect-[4/3] bg-black mb-4 overflow-hidden border border-white/10">
                        {item.url && <img src={item.url} alt="Gallery item" className="w-full h-full object-cover" />}
                      </div>
                      <input 
                        type="text"
                        placeholder="Image URL"
                        value={item.url}
                        onChange={(e) => {
                          const newGallery = [...(editingLodge.gallery || [])];
                          newGallery[idx].url = e.target.value;
                          setEditingLodge({ ...editingLodge, gallery: newGallery });
                        }}
                        className="w-full text-[10px] bg-black/40 border border-white/10 p-2 font-mono text-white mb-2"
                      />
                      <input 
                        type="text"
                        placeholder="Label"
                        value={item.label}
                        onChange={(e) => {
                          const newGallery = [...(editingLodge.gallery || [])];
                          newGallery[idx].label = e.target.value;
                          setEditingLodge({ ...editingLodge, gallery: newGallery });
                        }}
                        className="w-full text-[9px] uppercase tracking-widest font-black bg-black/40 border border-white/10 p-2 text-[#D4AF37]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 flex justify-end gap-10">
            <button 
              onClick={() => setEditingLodge(null)}
              className="text-[12px] uppercase font-black tracking-[0.4em] text-white/20 hover:text-red-500 transition-colors"
            >
              Discard Changes
            </button>
            <button 
              onClick={handleSaveLodge}
              className="px-16 py-7 bg-[#D4AF37] text-black text-[12px] uppercase font-black tracking-[0.8em] hover:bg-white transition-all shadow-[0_20px_50px_rgba(212,175,55,0.4)] flex items-center gap-6"
            >
              <Save size={20} /> Update Sanctuary
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="border-b border-white/10 pb-10">
            <h2 className="text-5xl font-serif font-bold text-white mb-4 uppercase tracking-tight">Sanctuary <span className="text-[#D4AF37] italic font-light">Registry</span></h2>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-black">Content Management & Boutique Inventory</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lodges.map(lodge => (
              <div key={lodge.id} className="bg-[#111] border border-white/5 p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl transition-all hover:border-[#D4AF37]/30 group">
                <div className="w-full md:w-56 aspect-[16/10] overflow-hidden border border-white/10 shrink-0">
                  <img src={lodge.imageUrl} alt={lodge.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                </div>
                <div className="flex-grow space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-tight">{lodge.name}</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-black">{lodge.location}</p>
                </div>
                <button 
                  onClick={() => setEditingLodge(lodge)}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-3"
                >
                  <Edit3 size={14} /> EDIT
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-40 pb-20 selection:bg-[#D4AF37] selection:text-black">
      <div className="container mx-auto px-6 max-w-[1700px]">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Dashboard Navigation */}
          <aside className="lg:col-span-3">
            <div className="sticky top-48 bg-[#111] border border-white/5 p-10 space-y-12 shadow-3xl">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] mx-auto mb-6 p-1">
                   <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                     <img src="https://i.postimg.cc/nrcnnVL1/unnamed-(1).jpg" alt="Logo" className="w-12 h-12" />
                   </div>
                </div>
                <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-black mb-2">NASIF</p>
                <p className="text-[9px] text-white/20 uppercase tracking-[0.4em]">Lead Curator</p>
              </div>

              <div className="space-y-2">
                {[
                  { id: 'intelligence', label: 'Intelligence Hub', icon: <TrendingUp size={16}/> },
                  { id: 'leads', label: 'Lead Registry', icon: <Users size={16}/> },
                  { id: 'sanctuaries', label: 'Sanctuary CMS', icon: <Layout size={16}/> },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id as AdminTab);
                      setEditingLodge(null);
                    }}
                    className={`w-full text-left px-8 py-5 text-[10px] uppercase tracking-[0.4em] font-black transition-all flex items-center justify-between group ${
                      activeTab === item.id 
                        ? 'bg-[#D4AF37] text-black shadow-[0_10px_30px_rgba(212,175,55,0.2)]' 
                        : 'text-white/40 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      {item.icon}
                      {item.label}
                    </span>
                    <div className={`w-1 h-1 rounded-full ${activeTab === item.id ? 'bg-black' : 'bg-transparent'}`} />
                  </button>
                ))}
              </div>

              <div className="pt-10 border-t border-white/5">
                <button 
                  onClick={onExit} 
                  className="w-full text-left px-8 py-5 text-[10px] uppercase tracking-[0.4em] font-black text-red-500 hover:bg-red-500/10 transition-colors flex items-center gap-4 group"
                >
                  <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                  End Session
                </button>
              </div>
            </div>
          </aside>

          {/* Tab Viewport */}
          <main className="lg:col-span-9">
            <div className="relative">
              {activeTab === 'intelligence' ? renderIntelligence() : 
               activeTab === 'leads' ? renderLeads() : 
               activeTab === 'sanctuaries' ? renderSanctuaries() : (
                <div className="py-48 text-center text-white/10 italic text-4xl font-serif">Protocol unavailable in current cycle.</div>
              )}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};