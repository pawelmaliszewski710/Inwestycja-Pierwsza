import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const AboutInvestor: React.FC = () => (
  <section id="o-inwestorze" className="py-24 bg-primary-50 scroll-mt-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-display font-bold text-primary-900 mb-8">Inwestycje budowane na solidnych fundamentach</h2>
      <div className="space-y-8 text-gray-500 leading-relaxed text-lg font-light">
        <p>
          DS DEV to firma deweloperska z wieloletnim doświadczeniem w realizacji kameralnych osiedli mieszkaniowych. 
          Naszą misją jest tworzenie miejsc, które nie są tylko budynkami, ale prawdziwymi domami.
        </p>
        <p>
          Każda nasza inwestycja poprzedzona jest szczegółowymi badaniami gruntu oraz wnikliwą analizą lokalizacji. 
          Wybieramy miejsca, które gwarantują wzrost wartości nieruchomości w czasie oraz komfort życia mieszkańców.
        </p>
        <p>
          Współpracujemy wyłącznie ze sprawdzonymi wykonawcami i dostawcami materiałów budowlanych najwyższej jakości. 
          Jesteśmy dumni z terminowości naszych realizacji i transparentności procesu sprzedaży.
        </p>
      </div>
    </div>
  </section>
);

export const ContactSection: React.FC = () => {
  const FORM_ENDPOINT = "https://formspree.io/f/xnjnajpz"; 
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormStatus('success');
        form.reset();
        return;
      }
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">Skontaktuj się!</h2>
              <p className="text-gray-500 text-lg">Masz pytania? Chętnie na nie odpowiemy. Umów się na spotkanie.</p>
            </div>

            <a 
              href="#formularz"
              onClick={(e) => handleScroll(e, '#formularz')}
              className="bg-primary-900 text-white px-8 py-4 rounded-full w-full md:w-auto font-bold shadow-soft-hover hover:bg-primary-800 transition-all text-lg text-center inline-block cursor-pointer"
            >
              Umów spotkanie
            </a>

            <div className="space-y-8 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-6">
                 <div className="p-4 bg-primary-50 rounded-2xl text-primary-900"><MapPin /></div>
                 <div>
                   <h4 className="font-display font-bold text-gray-900 text-lg mb-1">Biuro Sprzedaży</h4>
                   <p className="text-gray-500">ul. Przykładowa 123<br/>00-001 Warszawa</p>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <div className="p-4 bg-primary-50 rounded-2xl text-primary-900"><Mail /></div>
                 <div>
                   <h4 className="font-display font-bold text-gray-900 text-lg mb-1">Email</h4>
                   <a href="mailto:kontakt@dsdev.pl" className="text-primary-600 hover:text-primary-800 hover:underline transition-colors">kontakt@dsdev.pl</a>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <div className="p-4 bg-primary-50 rounded-2xl text-primary-900"><Phone /></div>
                 <div>
                   <h4 className="font-display font-bold text-gray-900 text-lg mb-1">Telefon</h4>
                   <a href="tel:+48123456789" className="block text-primary-600 hover:text-primary-800 hover:underline transition-colors">+48 123 456 789</a>
                 </div>
              </div>
            </div>
          </div>

          {/* Right: Map & Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-soft border border-gray-100" id="formularz">
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-100 rounded-3xl mb-10 relative overflow-hidden flex items-center justify-center group shadow-inner">
               <img src="https://picsum.photos/800/600?random=map" alt="Mapa" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale transition-opacity group-hover:opacity-80" />
               <div className="relative z-10 flex flex-col gap-3">
                  <a 
                    href="https://www.google.com/maps/search/Warszawa+Centrum" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-primary-900 text-center"
                  >
                    Wskazówki dojazdu
                  </a>
               </div>
            </div>

            {/* Form */}
            {formStatus === 'success' ? (
              <div className="bg-primary-50 border border-primary-100 rounded-3xl p-10 text-center animate-fade-in-up">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="w-20 h-20 text-primary-500" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-2">Wiadomość wysłana!</h3>
                <p className="text-primary-700">Dziękujemy za kontakt. Nasz doradca odezwie się do Ciebie wkrótce.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-primary-900 font-bold hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 ml-1" htmlFor="name">Imię i nazwisko *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required 
                      className="w-full border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:outline-none bg-gray-50 text-gray-900 placeholder-gray-400 transition-all" 
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 ml-1" htmlFor="phone">Telefon *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required 
                      className="w-full border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:outline-none bg-gray-50 text-gray-900 placeholder-gray-400 transition-all" 
                      placeholder="+48..."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1" htmlFor="email">Adres e-mail *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required 
                    className="w-full border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:outline-none bg-gray-50 text-gray-900 placeholder-gray-400 transition-all" 
                    placeholder="jan@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700 ml-1" htmlFor="message">Treść wiadomości</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    className="w-full border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:outline-none bg-gray-50 text-gray-900 placeholder-gray-400 transition-all resize-none"
                    placeholder="Dzień dobry, jestem zainteresowany mieszkaniem..."
                  ></textarea>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" required className="mt-1 w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500" />
                  <label htmlFor="privacy" className="text-xs text-gray-500 cursor-pointer leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z <a href="#" className="underline hover:text-primary-900">polityką prywatności</a>.
                  </label>
                </div>

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm border border-red-100">
                    <AlertCircle size={16} />
                    <span>Wystąpił błąd podczas wysyłania. Spróbuj ponownie później lub zadzwoń do nas.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary-900 text-white py-4 rounded-xl font-bold hover:bg-primary-800 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-lg"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Wysyłanie...
                    </>
                  ) : (
                    "Wyślij wiadomość"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};