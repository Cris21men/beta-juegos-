import React from 'react';
import { Heart, Mail, Facebook, Instagram, Twitter, Youtube, Github } from 'lucide-react';

export default function Footer() {
  // 🔴 EDITA AQUÍ TUS REDES SOCIALES
  const socialLinks = [
    { 
      icon: Facebook, 
      url: "https://facebook.com/TU_USUARIO", 
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    /*{ 
      icon: Instagram, 
      url: "https://instagram.com/TU_USUARIO", 
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      icon: Twitter, 
      url: "https://twitter.com/TU_USUARIO", 
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    { 
      icon: Youtube, 
      url: "https://youtube.com/@TU_CANAL", 
      label: "YouTube",
      color: "hover:text-red-500"
    },*/
    { 
      icon: "twitch",  // Emoji de Twitch
      url: "https://twitch.tv/TU_USUARIO", 
      label: "Twitch",
      color: "hover:text-purple-500",
      emoji: "🎮"
    },
    { 
      icon: "discord",  // Emoji de Discord
      url: "https://discord.gg/TU_SERVIDOR", 
      label: "Discord",
      color: "hover:text-indigo-400",
      emoji: "💬"
    },
    { 
      icon: Github, 
      url: "https://github.com/TU_USUARIO", 
      label: "GitHub",
      color: "hover:text-gray-300"
    }
  ];

  const email = "crismen2106@gmail.com"; // 🔴 EDITA AQUÍ TU EMAIL

  return (
    <footer className="relative z-20 mt-16 pb-8">
      <div className="container mx-auto px-8">
        {/* Línea decorativa superior */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-studio-gold to-transparent mb-8"></div>
        
        <div className="max-w-4xl mx-auto">
          {/* Redes Sociales */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative transition-all duration-300 ${social.color}`}
                aria-label={social.label}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  {social.emoji ? (
                    <span className="text-xl">{social.emoji}</span>
                  ) : (
                    <social.icon className="w-5 h-5 text-white transition-colors duration-300" />
                  )}
                </div>
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-studio-gold text-studio-teal px-3 py-1 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Email */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <Mail className="w-4 h-4 text-studio-gold" />
            <a 
              href={`mailto:${email}`}
              className="text-white/70 hover:text-studio-gold text-sm transition-colors duration-300"
            >
              {email}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/50 text-sm flex items-center justify-center gap-2">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>por Studio21</span>
            </p>
            <p className="text-white/30 text-xs mt-2">
              © {new Date().getFullYear()} Studio21. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}