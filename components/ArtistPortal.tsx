import React, { useState, useRef } from 'react';
import { Upload, FileMusic, CheckCircle, Cpu, Send, User, Mail, FileText, AlertCircle } from 'lucide-react';

export const ArtistPortal: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'complete'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = [
    'image/png', 'image/jpeg', 'image/jpg',
    'audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/x-wav',
    'video/mp4'
  ];

  const handleFileChange = (file: File) => {
    setError(null);
    const isValidType = allowedTypes.includes(file.type) || file.name.match(/\.(png|jpg|jpeg|mp3|mp4|wav)$/i);
    
    if (isValidType) {
      setSelectedFile(file);
    } else {
      setError("Format not supported. Please use PNG, JPEG, MP3, MP4, or WAV.");
      setSelectedFile(null);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !formData.name || !formData.email) {
      setError("Incomplete data. Please check fields and assets.");
      return;
    }

    setError(null);
    setUploadStatus('uploading');
    
    // Simulação de roteamento de pacotes para o servidor central em Miami/SP
    console.log("ROUTING SUBMISSION TO CORE...", {
      gateway: "MIA-SAO-HUB-01",
      sender: formData.name,
      contact: formData.email,
      asset: selectedFile.name,
      hash: Math.random().toString(36).substring(7).toUpperCase()
    });

    setTimeout(() => {
      setUploadStatus('complete');
    }, 4000);
  };

  const resetPortal = () => {
    setUploadStatus('idle');
    setSelectedFile(null);
    setError(null);
    setFormData({ name: '', email: '' });
  };

  return (
    <section id="vault" className="py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-white/5 rounded-full border border-white/10">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter uppercase italic">The Vault</h3>
            <p className="text-xs text-neutral-500 font-mono tracking-wider">SECURE GLOBAL SUBMISSION ENGINE</p>
          </div>
        </div>

        {uploadStatus !== 'complete' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-white transition-colors">
                  <User size={14} />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="FULL NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-neutral-900/40 border border-white/10 p-4 pl-12 text-[10px] font-mono tracking-widest uppercase focus:outline-none focus:border-white/40 transition-all text-white"
                />
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-white transition-colors">
                  <Mail size={14} />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-neutral-900/40 border border-white/10 p-4 pl-12 text-[10px] font-mono tracking-widest uppercase focus:outline-none focus:border-white/40 transition-all text-white"
                />
              </div>
            </div>

            <div 
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              onClick={() => uploadStatus === 'idle' && fileInputRef.current?.click()}
              className={`
                relative aspect-[21/9] border border-dashed flex flex-col items-center justify-center cursor-pointer transition-all duration-500
                ${isDragging ? 'border-white bg-white/5 scale-[1.01]' : 'border-neutral-800 bg-neutral-900/20'}
                ${selectedFile ? 'border-neutral-500' : ''}
                ${uploadStatus === 'uploading' ? 'pointer-events-none opacity-80' : ''}
              `}
            >
              <input 
                type="file" 
                ref={fileInputRef}
                className="hidden" 
                accept=".png,.jpg,.jpeg,.mp3,.mp4,.wav"
                onChange={(e) => e.target.files && handleFileChange(e.target.files[0])}
              />

              {uploadStatus === 'idle' && (
                <>
                  {!selectedFile ? (
                    <>
                      <Upload className="w-10 h-10 mb-4 text-neutral-600 group-hover:text-white transition-colors" />
                      <p className="text-neutral-400 font-mono text-[10px] tracking-widest uppercase px-4 text-center">
                        Drop Assets here or click to browse
                      </p>
                      <p className="mt-2 text-[9px] text-neutral-700 font-mono italic">PNG, JPEG, MP3, MP4, WAV</p>
                    </>
                  ) : (
                    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-2">
                      <FileText className="w-10 h-10 mb-4 text-white" />
                      <p className="text-white font-mono text-xs tracking-widest uppercase">{selectedFile.name}</p>
                      <p className="text-neutral-600 text-[9px] mt-1">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  )}
                </>
              )}

              {uploadStatus === 'uploading' && (
                <div className="w-full max-w-xs space-y-4 text-center">
                  <div className="h-[2px] w-full bg-neutral-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white animate-progress-scan"></div>
                  </div>
                  <p className="text-white font-mono text-[10px] tracking-[0.3em] animate-pulse">TRANSMITTING TO MIAMI CORE...</p>
                </div>
              )}
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 font-mono text-[9px] uppercase tracking-widest animate-in fade-in slide-in-from-left-2">
                <AlertCircle size={12} />
                {error}
              </div>
            )}

            <button 
              type="submit"
              disabled={uploadStatus === 'uploading' || !selectedFile}
              className="w-full py-5 bg-white text-black font-bold text-xs tracking-[0.4em] uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Send size={14} />
              {uploadStatus === 'uploading' ? 'Syncing...' : 'Transmit Submission'}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center py-20 animate-in fade-in zoom-in duration-500 text-center">
            <CheckCircle className="text-white w-16 h-16 mb-6" />
            <h4 className="text-2xl font-bold text-white tracking-tighter uppercase mb-2">Ingestion Complete</h4>
            <p className="text-neutral-500 font-mono text-[10px] tracking-widest uppercase max-w-sm">
              Data successfully routed. Our production team in Miami and São Paulo will be notified.
            </p>
            <button 
              onClick={resetPortal}
              className="mt-10 text-[10px] uppercase border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all font-bold tracking-widest"
            >
              Initialize New Submission
            </button>
          </div>
        )}
        
        <div className="mt-8 flex justify-between items-start opacity-40">
           <div className="text-[9px] font-mono leading-relaxed max-w-[250px]">
             *Global asset synchronization active. All submissions are direct-routed to the SPM headquarters.
           </div>
           <div className="text-[9px] font-mono">
             REF: SPM_VLT_GLOBAL_2.5
           </div>
        </div>
      </div>
    </section>
  );
};