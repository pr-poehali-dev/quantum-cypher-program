import { useState } from 'react';

const SEND_EMAIL_URL = 'https://functions.poehali.dev/ddf2cccc-12d1-427d-a3d2-d757a1eb9b68';

export default function Index() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(SEND_EMAIL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            SMM.PORT
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Кейсы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Обо мне
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              SMM
              <br />
              <span className="text-red-600">WORKS</span>
            </h1>
            <p className="text-xl max-w-xl">
              Контент, который продаёт. Стратегии, которые работают. Соцсети, которые растут — цифры вместо слов.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
                <span className="text-7xl">×3</span>
                <span className="text-lg uppercase tracking-widest mt-2">рост охватов</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">КЕЙСЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black group-hover:text-white text-6xl font-bold transition-colors">+214%</span>
                  <span className="text-neutral-500 group-hover:text-white text-sm uppercase tracking-widest mt-2 transition-colors">подписчиков</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Ресторан «Моя Кухня»</h3>
              <p className="text-neutral-400">Instagram & VK — выстроили контент-план, запустили Reels. Рост с 1200 до 3800 подписчиков за 3 месяца.</p>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black group-hover:text-white text-6xl font-bold transition-colors">×5</span>
                  <span className="text-neutral-500 group-hover:text-white text-sm uppercase tracking-widest mt-2 transition-colors">заявок в месяц</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Фитнес-клуб Pulse</h3>
              <p className="text-neutral-400">Таргет + контент в Instagram. До нас — 12 заявок/мес, после — 60. Стоимость заявки снизилась в 2 раза.</p>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-6">
                  <span className="text-black group-hover:text-white text-6xl font-bold transition-colors">8.4%</span>
                  <span className="text-neutral-500 group-hover:text-white text-sm uppercase tracking-widest mt-2 transition-colors">ER вместо 1.2%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Бренд одежды LOMA</h3>
              <p className="text-neutral-400">Редизайн аккаунта, UGC-стратегия, коллаборации с микроинфлюенсерами. Engagement вырос в 7 раз.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ОБО<br/>МНЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black flex items-center justify-center">
                  <span className="text-6xl font-bold text-neutral-300">SMM</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Я SMM-специалист с фокусом на результат: рост подписчиков, вовлечённость и реальные заявки из соцсетей.
              </p>
              <p className="mb-6">
                Работаю с Instagram, ВКонтакте и Telegram. Создаю контент-стратегии, запускаю таргетированную рекламу, веду аккаунты под ключ — от идеи до аналитики.
              </p>
              <p className="mb-6">
                За 3+ года — более 20 проектов в нишах ресторанного бизнеса, фитнеса, fashion и онлайн-образования. Каждый кейс — измеримый результат.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Подход</h3>
                  <ul className="space-y-2">
                    <li>Анализ конкурентов</li>
                    <li>Контент-стратегия</li>
                    <li>A/B тестирование</li>
                    <li>Еженедельная аналитика</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Услуги</h3>
                  <ul className="space-y-2">
                    <li>Ведение аккаунтов</li>
                    <li>Таргетированная реклама</li>
                    <li>Контент-план</li>
                    <li>Аудит соцсетей</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">НАПИШИТЕ МНЕ</h2>
              <p className="text-xl mb-8">Хотите такие же результаты? Обсудим ваш проект — первая консультация бесплатно.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:hello@smmport.ru" className="hover:underline">
                    hello@smmport.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Telegram</span>
                  <a href="https://t.me/yourusername" className="hover:underline">
                    @yourusername
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-28 text-sm uppercase tracking-widest">Instagram</span>
                  <a href="https://instagram.com/yourusername" className="hover:underline">
                    @yourusername
                  </a>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Проект
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 resize-none"
                    placeholder="Расскажите о своём проекте и задаче"
                  />
                </div>
                {status === 'success' && (
                  <p className="text-white font-bold text-center">Заявка отправлена! Свяжемся скоро.</p>
                )}
                {status === 'error' && (
                  <p className="text-white/70 text-center">Что-то пошло не так. Попробуйте ещё раз.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-white text-red-600 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-bold tracking-tighter">SMM.PORT</span>
          <span className="text-sm text-neutral-500">© 2026 — SMM портфолио</span>
        </div>
      </footer>
    </main>
  );
}