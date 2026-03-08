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
      </div>
      <Footer />
    </div>
  )
}

export default Index