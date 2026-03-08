import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-40">
            <div className="flex items-center justify-center mb-3.5 md:gap-11">
              <div className="flex flex-col items-center">
                <img src={`${CDN_BASE}/jack-front.png`} alt="Макс спереди" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>

              <div className="flex flex-col items-center">
                <img src={`${CDN_BASE}/jack-side.png`} alt="Макс сбоку" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>

              <div className="flex flex-col items-center">
                <img src={`${CDN_BASE}/jack-back.png`} alt="Макс сзади" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Специализация</span>
                <span className="text-foreground font-mono text-sm">ОСАГО и КАСКО для физических лиц</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Опыт</span>
                <span className="text-foreground font-mono text-sm">Независимый страховой агент</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm">Подход</span>
                <span className="text-foreground font-mono text-sm">
                  Подбираю лучшие условия страхования под ваш автомобиль и бюджет. Быстро, честно и без переплат.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-4 md:px-0 mt-6 mb-2">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent)", transform: "translate(30%, -30%)" }} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <span className="text-accent font-mono text-sm">О компании</span>
                <h2 className="text-foreground text-2xl md:text-3xl font-semibold mt-2 mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Надёжность, проверенная временем
                </h2>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                  Мы — надёжный партнёр в сфере страховых продуктов на территории Российской Федерации. Более <span className="text-accent font-semibold">456 689</span> довольных клиентов уже выбрали нас — и это число продолжает расти!
                </p>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  Возникли вопросы? Наши менеджеры готовы предоставить подробную консультацию и помочь найти оптимальное решение для вашей ситуации.
                </p>
              </div>
              <div className="flex flex-col items-start md:items-center gap-5 md:min-w-[220px]">
                <div className="text-center">
                  <div className="text-accent text-4xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>456 689</div>
                  <div className="text-muted-foreground font-mono text-xs mt-1">довольных клиентов</div>
                </div>
                <a
                  href="https://t.me/Klever_Support_Retail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl font-mono text-sm hover:opacity-90 transition-opacity"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 md:px-0 mt-6 mb-6">
          <div className="mb-8 px-2">
            <span className="text-accent font-mono text-sm">Услуги</span>
            <h2 className="text-foreground text-3xl md:text-4xl font-semibold mt-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              Что мы оформляем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* ОСАГО */}
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300">
              <div className="text-3xl">🚗</div>
              <div>
                <h3 className="text-foreground font-semibold text-xl mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>ОСАГО</h3>
                <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                  Обязательное страхование автогражданской ответственности. Оформим быстро — полис придёт на email.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Онлайн без визита в офис
                </li>
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Все страховые компании
                </li>
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Лучшая цена на рынке
                </li>
              </ul>
            </div>

            {/* КАСКО */}
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="text-foreground font-semibold text-xl mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>КАСКО</h3>
                <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                  Полная защита вашего автомобиля от угона, ДТП и ущерба. Подберём оптимальный пакет под ваш бюджет.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Полное и частичное КАСКО
                </li>
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Защита от угона и ДТП
                </li>
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Индивидуальные условия
                </li>
              </ul>
            </div>

            {/* Почему мы */}
            <div className="bg-primary/10 border border-accent/30 rounded-2xl p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="text-foreground font-semibold text-xl mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>Почему Клевер</h3>
                <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                  Работаем с ведущими страховыми компаниями России. Без очередей, без лишних бумаг.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Оформление за 10 минут
                </li>
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Сравниваем 20+ компаний
                </li>
                <li className="flex items-center gap-2 text-sm font-mono text-foreground">
                  <span className="text-accent">*</span> Поддержка после оформления
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Reviews Section */}
        <section className="px-4 md:px-0 mt-6 mb-6">
          <div className="mb-8 px-2">
            <span className="text-accent font-mono text-sm">Отзывы</span>
            <h2 className="text-foreground text-3xl md:text-4xl font-semibold mt-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              Что говорят клиенты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-accent text-sm">★</span>)}
              </div>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed flex-1">
                "Оформил ОСАГО за 10 минут, полис пришёл на почту моментально. Цена оказалась ниже, чем я находил сам. Очень доволен!"
              </p>
              <div className="border-t border-border pt-4">
                <div className="text-foreground font-semibold text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>Александр М.</div>
                <div className="text-muted-foreground font-mono text-xs">ОСАГО · Москва</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-accent text-sm">★</span>)}
              </div>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed flex-1">
                "Помогли подобрать КАСКО с хорошим покрытием и в рамках бюджета. Менеджер объяснил все нюансы, не навязывал лишнего. Рекомендую!"
              </p>
              <div className="border-t border-border pt-4">
                <div className="text-foreground font-semibold text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>Ольга В.</div>
                <div className="text-muted-foreground font-mono text-xs">КАСКО · Санкт-Петербург</div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-accent text-sm">★</span>)}
              </div>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed flex-1">
                "Уже второй год страхуюсь через Клевер. Всегда лучшие цены и быстрое оформление. Больше никуда не хожу!"
              </p>
              <div className="border-t border-border pt-4">
                <div className="text-foreground font-semibold text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>Дмитрий К.</div>
                <div className="text-muted-foreground font-mono text-xs">ОСАГО + КАСКО · Екатеринбург</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index