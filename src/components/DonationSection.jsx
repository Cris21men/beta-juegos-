import React, { useState } from 'react';
import { Heart, Coffee, X, Copy, Check } from 'lucide-react';

export default function DonationSection() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 🔴 EDITA AQUÍ TUS MÉTODOS DE DONACIÓN
  const donationMethods = [
    {
      name: "PayPal",
      url: "https://paypal.me/TU_USUARIO",  // ← 🔴 CAMBIA TU LINK DE PAYPAL AQUÍ
      icon: "💳",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Yape/Plin",
      number: "966 518 727",  // Tu número actual
      icon: "📱",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Botón flotante de donación - SUPERIOR DERECHA */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed top-8 right-8 z-40 group"
      >
        <div className="relative">
          {/* Pulso de fondo */}
          <div className="absolute inset-0 bg-studio-gold rounded-full animate-ping opacity-75"></div>
          
          {/* Botón principal */}
          <div className="relative bg-gradient-to-br from-studio-gold to-yellow-500 rounded-full p-4 shadow-2xl transform transition-all duration-300 group-hover:scale-110">
            <Heart className="w-6 h-6 text-studio-teal animate-pulse" />
          </div>
        </div>
        
        {/* Texto flotante */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-studio-gold text-studio-teal px-4 py-2 rounded-lg font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
          ¡Apóyanos! ☕
        </div>
      </button>

      {/* Modal de donaciones */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-studio-teal to-teal-900 rounded-2xl max-w-3xl w-full shadow-2xl border-4 border-studio-gold overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-studio-gold to-yellow-500 p-6 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="text-center">
                <Coffee className="w-16 h-16 mx-auto mb-3 text-studio-teal animate-bounce" />
                <h2 className="text-3xl font-bold text-studio-teal">¡Apoya nuestro trabajo!</h2>
                <p className="text-studio-teal/80 mt-2">Tu apoyo nos ayuda a seguir creando juegos increíbles</p>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-8">
              {/* Imagen central */}
              <div className="mb-8 flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-studio-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  
                  <img 
                    src="/tengohambre.png"
                    alt="Apóyanos"
                    onLoad={() => {
                      console.log("✅ Imagen cargada correctamente");
                      setImageLoaded(true);
                    }}
                    onError={(e) => {
                      console.error("❌ Error al cargar imagen");
                      setImageLoaded(false);
                    }}
                    className="relative w-full max-w-md h-auto rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 border-4 border-studio-gold/50"
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                  />
                  
                  {!imageLoaded && (
                    <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl border-4 border-studio-gold/50 p-12 text-center max-w-md">
                      <div className="text-7xl mb-4">🍕</div>
                      <p className="text-white text-2xl font-bold mb-2">
                        ¡Tenemos hambre!
                      </p>
                      <p className="text-white/90 text-base">
                        Tu apoyo nos ayuda a seguir creando
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Métodos de donación - CENTRADOS CON 2 COLUMNAS */}
              <div className="flex flex-wrap justify-center gap-6 mb-6 max-w-2xl mx-auto">
                {donationMethods.map((method, index) => (
                  <div key={index} className="group cursor-pointer w-full sm:w-64">
                    {method.url ? (
                      <a
                        href={method.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block bg-gradient-to-br ${method.color} rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                      >
                        <div className="text-5xl mb-4">{method.icon}</div>
                        <h3 className="text-white font-bold text-xl mb-2">{method.name}</h3>
                        <p className="text-white/80 text-sm">Click para donar</p>
                      </a>
                    ) : (
                      <div
                        onClick={() => copyToClipboard(method.number)}
                        className={`bg-gradient-to-br ${method.color} rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                      >
                        <div className="text-5xl mb-4">{method.icon}</div>
                        <h3 className="text-white font-bold text-xl mb-3">{method.name}</h3>
                        <div className="flex items-center justify-center gap-2 bg-white/20 rounded-lg p-3">
                          <span className="text-white font-mono text-base">{method.number}</span>
                          {copied ? (
                            <Check className="w-5 h-5 text-green-300" />
                          ) : (
                            <Copy className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <p className="text-white/80 text-xs mt-3">Click para copiar</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mensaje de agradecimiento */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-3 text-studio-gold animate-pulse" />
                <p className="text-white text-lg font-semibold mb-2">
                  ¡Gracias por tu apoyo!
                </p>
                <p className="text-white/70 text-sm">
                  Cada donación nos motiva a crear mejores experiencias de juego para ti
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}