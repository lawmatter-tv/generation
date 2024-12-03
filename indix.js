import React, { useState } from 'react';
import { Bell, Calendar, Car, BookOpen, Users, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AutoEcole = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);

  const formations = [
    {
      title: "Permis B",
      description: "Formation complète au permis voiture",
      price: "999€",
      features: ["20h de conduite", "Accès illimité au code", "Accompagnement personnalisé"],
      icon: <Car className="w-6 h-6" />
    },
    {
      title: "Code de la route",
      description: "Préparation à l'examen théorique",
      price: "299€",
      features: ["Cours en présentiel", "Tests en ligne", "Suivi pédagogique"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Conduite accompagnée",
      description: "Formation AAC dès 15 ans",
      price: "899€",
      features: ["Formation initiale", "RDV pédagogiques", "Suivi personnalisé"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      content: "J'ai obtenu mon permis du premier coup grâce à leurs conseils !",
      rating: 5
    },
    {
      name: "Thomas B.",
      content: "Des moniteurs patients et professionnels. Je recommande !",
      rating: 5
    },
    {
      name: "Sarah M.",
      content: "La conduite accompagnée était parfaite pour moi. Merci !",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Génération auto école</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600">Accueil</a>
              <a href="#formations" className="text-gray-700 hover:text-blue-600">Formations</a>
              <a href="#temoignages" className="text-gray-700 hover:text-blue-600">Témoignages</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Votre réussite commence ici</h1>
          <p className="text-xl mb-8">Formation de qualité avec des moniteurs expérimentés</p>
          <Alert className="max-w-lg mx-auto bg-white text-blue-600">
            <Bell className="w-4 h-4" />
            <AlertTitle>Offre Spéciale</AlertTitle>
            <AlertDescription>-20% sur le pack code + conduite en décembre !</AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Formations */}
      <div id="formations" className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Formations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  {formation.icon}
                  <CardTitle>{formation.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{formation.description}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{formation.price}</p>
                <ul className="space-y-2">
                  {formation.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  onClick={() => setSelectedFormation(formation)}
                >
                  En savoir plus
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Témoignages */}
      <div id="temoignages" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <p>123 Avenue de la République, 75011 Paris</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <p>01 23 45 67 89</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <p>contact@generation-auto-ecole.fr</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <p>Du lundi au samedi : 9h-19h</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold">Prendre rendez-vous</h3>
              </div>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nom complet" 
                  className="w-full p-2 border rounded-lg"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-2 border rounded-lg"
                />
                <textarea 
                  placeholder="Message" 
                  className="w-full p-2 border rounded-lg h-32"
                ></textarea>
                <button 
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Envoyer
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Génération auto école - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
};

export default AutoEcole;
