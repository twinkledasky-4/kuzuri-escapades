
import React, { useState } from 'react';
import { DESTINATIONS, TOURS, SERVICES } from '../constants';
import { Destination, Tour, Service } from '../types';

type AdminTab = 'destinations' | 'packages' | 'services';

export const AdminPanel: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('destinations');
  const [items, setItems] = useState({
    destinations: [...DESTINATIONS],
    packages: [...TOURS],
    services: [...SERVICES]
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDelete = (tab: AdminTab, id: string) => {
    if (confirm('Are you sure you want to remove this item? This action is permanent.')) {
      setItems(prev => ({
        ...prev,
        [tab]: prev[tab].filter((item: any) => item.id !== id)
      }));
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const renderEditForm = (item: any) => {
    return (
      <div className="bg-white border border-stone-100 p-10 shadow-xl animate-fade-in">
        <div className="flex justify-between items-center mb-10 border-b border-stone-50 pb-6">
          <h3 className="text-2xl font-serif text-[#002d04]">Edit {item.name || 'Item'}</h3>
          <button onClick={() => setEditingId(null)} className="text-stone-300 hover:text-red-400 p-2">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setEditingId(null); alert('Item updated (Mock)'); }}>
          <div>
            <label className="block text-[9px] uppercase tracking-widest text-stone-400 mb-2 font-bold">Display Name</label>
            <input defaultValue={item.name} className="w-full bg-stone-50 border-b border-stone-100 py-3 px-2 outline-none focus:border-[#d4af37] transition-all" />
          </div>
          <div>
            <label className="block text-[9px] uppercase tracking-widest text-stone-400 mb-2 font-bold">Slug / URL Segment</label>
            <input defaultValue={item.slug} className="w-full bg-stone-50 border-b border-stone-100 py-3 px-2 outline-none focus:border-[#d4af37] transition-all" />
          </div>
          <div>
            <label className="block text-[9px] uppercase tracking-widest text-stone-400 mb-2 font-bold">Full Description</label>
            <textarea defaultValue={item.description} className="w-full bg-stone-50 border-b border-stone-100 py-3 px-2 outline-none focus:border-[#d4af37] transition-all h-32 resize-none" />
          </div>
          <div className="flex gap-4 pt-6">
            <button type="submit" className="flex-grow py-4 bg-[#002d04] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#d4af37] transition-all">
              Save Changes
            </button>
            <button type="button" onClick={() => setEditingId(null)} className="px-8 py-4 border border-stone-100 text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 hover:bg-stone-50">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };

  const renderTabContent = () => {
    if (editingId) {
      const allItems = [...items.destinations, ...items.packages, ...items.services];
      const itemToEdit = allItems.find(i => i.id === editingId);
      if (itemToEdit) return renderEditForm(itemToEdit);
    }

    switch (activeTab) {
      case 'destinations':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-serif text-[#002d04]">Manage Territories</h2>
              <button className="px-6 py-3 bg-[#d4af37] text-[#002d04] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#002d04] hover:text-white transition-all">
                Add New Destination
              </button>
            </div>
            <div className="grid gap-4">
              {items.destinations.map(dest => (
                <div key={dest.id} className="bg-white border border-stone-100 p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-6 items-center">
                    <img src={dest.images[0]} className="w-16 h-16 object-cover grayscale" alt="" />
                    <div>
                      <h4 className="font-serif text-lg text-[#002d04]">{dest.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-stone-400">{dest.tagline}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => handleEdit(dest.id)} className="text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-[#002d04]">Edit</button>
                    <button onClick={() => handleDelete('destinations', dest.id)} className="text-[10px] uppercase tracking-widest font-bold text-red-300 hover:text-red-500">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'packages':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-serif text-[#002d04]">Itinerary Collection</h2>
              <button className="px-6 py-3 bg-[#d4af37] text-[#002d04] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#002d04] hover:text-white transition-all">
                Create New Package
              </button>
            </div>
            <div className="grid gap-4">
              {items.packages.map(tour => (
                <div key={tour.id} className="bg-white border border-stone-100 p-6 flex justify-between items-center shadow-sm">
                  <div className="flex gap-6 items-center">
                    <img src={tour.imageUrls[0]} className="w-16 h-16 object-cover grayscale" alt="" />
                    <div>
                      <h4 className="font-serif text-lg text-[#002d04]">{tour.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-stone-400">{tour.duration_days} Days • {tour.currency} {tour.price_from}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => handleEdit(tour.id)} className="text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-[#002d04]">Edit</button>
                    <button onClick={() => handleDelete('packages', tour.id)} className="text-[10px] uppercase tracking-widest font-bold text-red-300 hover:text-red-500">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-serif text-[#002d04]">Concierge Services</h2>
              <button className="px-6 py-3 bg-[#d4af37] text-[#002d04] text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#002d04] hover:text-white transition-all">
                Add Service
              </button>
            </div>
            <div className="grid gap-4">
              {items.services.map(service => (
                <div key={service.id} className="bg-white border border-stone-100 p-6 flex justify-between items-center shadow-sm">
                  <div>
                    <h4 className="font-serif text-lg text-[#002d04]">{service.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">{service.typeLabel} • {service.active ? 'Active' : 'Hidden'}</p>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => handleEdit(service.id)} className="text-[10px] uppercase tracking-widest font-bold text-stone-400 hover:text-[#002d04]">Edit</button>
                    <button onClick={() => handleDelete('services', service.id)} className="text-[10px] uppercase tracking-widest font-bold text-red-300 hover:text-red-500">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-40 space-y-2">
              <p className="text-[9px] uppercase tracking-[0.4em] text-stone-300 mb-8 font-bold">Administration</p>
              {(['destinations', 'packages', 'services'] as AdminTab[]).map(tab => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setEditingId(null); }}
                  className={`w-full text-left px-6 py-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all ${
                    activeTab === tab && !editingId
                      ? 'bg-[#002d04] text-white shadow-lg' 
                      : 'text-stone-400 hover:text-[#002d04] hover:bg-stone-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="pt-10 border-t border-stone-200 mt-10">
                <button 
                  onClick={onExit}
                  className="w-full text-left px-6 py-4 text-[10px] uppercase tracking-[0.4em] font-bold text-red-400 hover:bg-red-50 transition-all"
                >
                  Exit Admin
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            {renderTabContent()}
          </main>
        </div>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};
