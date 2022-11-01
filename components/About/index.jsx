import React from 'react';
import style from './index.module.scss';
import { useSelector } from 'react-redux';
const About = () => {

    const lang = useSelector((state) => state.lang.lang);
    return (
        <>

            {
                lang === 'ru' ? (
                    <div className={style.about}>
                        <h1>О НАС</h1>
                        <p>
                            Наша компания Liveme была основана в 2022 году. <br />
                            Liveme, базирующаяся в Турции и начинающаяся с молодой и активной команды, открыта для инноваций, ориентирована на свои цели и с каждым днем становится все более предпочтительной компанией. Стремясь к все большему расширению своего воскресенья как внутри страны, так и за рубежом, наш бренд экспортирует продукцию во многие страны, в частности в Россию, Казахстан, Кыргызстан, Грузию, Украину, Германию, Польшу.

                        </p>
                        <p>
                            Liveme <br />
                            "Живи со мной", что означает наш бренд Liveme - это создание аромата окружающей среды, который наши клиенты не забудут. Кроме того, мы движемся к тому, чтобы стать здоровой и высоко оцененной ведущей компанией со многими категориями продуктов.

                        </p>
                        <p>
                            Цели Liveme  <br />
                            Вы никогда не забудете обстановку, в которой вы привыкли к запаху, создаст мирную и счастливую атмосферу для наших клиентов и заставит их чувствовать себя хорошо. Мы будем продолжать предоставлять нашим уважаемым клиентам наш девиз. Благодаря нашим передовым технологиям в нашей производственной сфере мы продолжим декоммунизируем нашу команду экспертов и НИОКР, ориентированную на мир. Мы по-прежнему будем естественным и искренним брендом, подходящим для всех наших клиентов, привнося новую жизнь в этот сектор с дальновидной структурой. Вдохнув новую жизнь в отрасль благодаря нашей дальновидной  природе, мы продолжим оставаться брендом, который естественным образом обеспечивает счастье, с нашими продуктами, подходящими для любого цвета лица и любой среды.

                        </p>
                        <p>
                            ДЕКОММУНИЗАЦИЯ СРЕДИ НАШИХ ЦЕННОСТЕЙ <br />
                            Качество и надежность находятся на переднем крае. Каждый наш клиент имеет для нас особое значение. Мы живем в семейной обстановке с нашими клиентами и командой, говоря "Счастливый клиент, счастливый сотрудник" в нашем понимании торговли.

                        </p>
                        <p>
                            МОЛОДАЯ КОМПАНИЯ <br />
                            Оборудованный и современный, наш производственный комплекс может быть адаптирован на лету, следуя современным тенденциям и технологическим разработкам наших специализированных групп. Наша компания, которая всегда открыта для инноваций и прозрачна, постоянно находится на пути развития.

                        </p>
                    </div>
                ) : null
            }
            {
                lang === 'tr' ? (<div className={style.about}>
                    <h1>HAKKIMIZDA</h1>
                    <p>
                        Liveme firmamız 2022 yılında kurulmuştur.
                        <br />
                        Türkiye merkezli olan, genç ve dinamik ekibiyle başlayan Liveme firmamız yeniliğe açık, hedeflerine odaklanan ve her gün daha da gelişerek en çok tercih edilen bir firmadır. yurt içindeki ve yurt dışındaki pazar alanını gittikçe büyütmeyi hedefleyen markamız, Rusya, Kazakistan, Kırgızistan, Gürcistan, Ukrayna, Almanya, Polonya başta olmak üzere birçok ülkeye ihracat yapmaktadır.

                    </p>
                    <p>
                        Liveme Vizyonumuz (HEDEF)
                        <br />
                        Liveme markamızın anlamı olan ''Yaşa beni'' müşterilerimizin unutamayacağı mis gibi ortam kokusu yaratmaktır. Bunun yanısıra bir çok ürün kategorisiyle sağlıklı ve en çok beğenilen bir lider firma olmaya doğru ilerlemekteyiz.

                    </p>
                    <p>
                        Liveme MİSYON (AMAÇ)
                        <br />
                        Müşterilerimize huzurlu ve mutlu bir ambiyans yaratak kendilerini iyi hissetmelerini sağlayacak ''Kokusuna alıştığınız ortamı asla unutamazsınız..'' sloganımızla değerli müşterilerimize sunmaya devam edeceğiz.
                        Son derece gelişmiş teknolojilerimiz ile üretim alanımızda, uzman ekip ve ar-ge odaklı çalışmalarımızı Dünya'ya taşımaya devam edeceğiz.
                        Vizyoner bir yapıyla bu sektöre yeni bir hayat kazandırarak tüm müşterilerimize uygun, doğal ve samimi bir marka olmaya devam edeceğiz.
                        İleri görüşlü ve vizyoner yapımızla sektöre yeni bir soluk kazandırarak, her tene ve her ortama uygun ürünlerimizle, doğal olarak mutluluk sağlayan marka olmaya devam edeceğiz.

                    </p>


                    <p>
                        DEĞERLERİMİZ ARASINDA
                        <br />
                        Kalite ve güvenilirlik ön planda bulunmaktadır. Her müşterimizin bizim için ayrı bir önemi vardır. Ticaret anlayışımızda ''Mutlu müşteri mutlu çalışan'' diyerek müşterilerimiz ve ekibimizle bir aile ortamı yaşamaktayız.

                    </p>
                    <p>
                        YENLİKÇİ BİR FİRMAYIZ
                        <br />
                        Donanımlı ve modern olan üretim tesisimiz, uzman ekiplerimizce trend olan ve teknolojik gelişmeleri güncel bir şekilde takip ederek anında adapte olabilmektedir. Her zaman yeniliğe açık ve şeffaf olan firmamız gelişme yolunda durmadan devam etmektedir.
                    </p>
                </div>) : null
            }
            {
                lang === 'en' ? (
                    <div className={style.about}>
                        <h1>ABOUT US</h1>
                        <p>
                            Our Liveme company was established in 2022. <br />
                            Our company, Liveme, which is based in Turkey and started with its young and dynamic team, is a company that is open to innovation, focusing on its goals and developing more and more every day, is the most preferred company. Our brand, which aims to gradually expand its domestic and international market area, exports to many countries, especially Russia, Kazakhstan, Kyrgyzstan, Georgia, Ukraine, Germany and Poland.
                        </p>

                        <p>
                            Our Liveme Vision (GOAL) <br />
                            "Live me", which is the meaning of our Liveme brand, is to create an unforgettable atmosphere for our customers. In addition, we are moving towards being a healthy and most admired leader company with many product categories.
                        </p>

                        <p>
                            Liveme MISSION (OBJECTIVE) <br />
                            We will continue to offer our valued customers with our motto "You can never forget the environment you are used to smelling", which will make our customers feel good by creating a peaceful and happy ambiance. With our highly advanced technologies, we will continue to carry our expert team and R&D-oriented work to the world in our production area. We will continue to be a natural and sincere brand suitable for all our customers by bringing a new life to this sector with a visionary structure. We will continue to be a brand that naturally provides happiness with our products suitable for every skin and every environment, bringing a new breath to the sector with our forward-thinking and visionary structure.
                        </p>

                        <p>
                            BETWEEN OUR VALUES <br />
                            Quality and reliability are at the forefront. Each of our customers has a special importance for us. We live a family atmosphere with our customers and our team by saying "Happy customer, happy employee" in our understanding of trade.
                        </p>

                        <p>
                            WE ARE AN INNOVATIVE COMPANY <br />
                            Our equipped and modern production facility is able to adapt instantly by following trending and technological developments by our expert teams. Our company, which is always open to innovation and transparent, continues on the path of development without stopping.
                        </p>
                    </div>
                ) : null
            }
            {
                lang === 'pl' ? (
                    <div className={style.about}>
                        <h1>O NAS</h1>
                        <p>
                            Nasza firma Liveme powstała w 2022 roku. <br />
                            Nasza firma, Liveme, która ma siedzibę w Turcji i zaczynała z młodym i dynamicznym zespołem, jest firmą otwartą na innowacje, koncentrującą się na swoich celach i rozwijającą się coraz bardziej każdego dnia, jest najbardziej preferowaną firmą. Nasza marka, której celem jest stopniowe rozszerzanie swojego rynku krajowego i międzynarodowego, eksportuje do wielu krajów, w szczególności do Rosji, Kazachstanu, Kirgistanu, Gruzji, Ukrainy, Niemiec i Polski.
                        </p>

                        <p>
                            Nasza wizja Liveme (cel) <br />
                            "Live me", które jest znaczeniem naszej marki Liveme, jest stworzenie niezapomnianej atmosfery dla naszych klientów. Ponadto zmierzamy w kierunku bycia zdrową i najbardziej podziwianą firmą lidera z wieloma kategoriami produktów.

                        </p>
                        <p>
                            Misja Liveme (cel) <br />
                            Będziemy nadal oferować naszym cenionym klientom nasze motto "nigdy nie zapomnisz środowiska, do którego przywykłeś", które sprawi, że nasi klienci poczują się dobrze, tworząc spokojną i szczęśliwą atmosferę. Dzięki naszym wysoce zaawansowanym technologiom będziemy nadal prowadzić nasz zespół ekspertów i prace badawczo-rozwojowe na całym świecie w naszym obszarze produkcyjnym. Nadal będziemy naturalną i szczerą marką odpowiednią dla wszystkich naszych klientów, wprowadzając nowe życie w tym sektorze dzięki wizjonerskiej strukturze. Nadal będziemy marką, która naturalnie zapewnia szczęście dzięki naszym produktom odpowiednim dla każdej skóry i każdego środowiska, wnosząc nowy oddech do sektora dzięki naszej przyszłościowej i wizjonerskiej strukturze.

                        </p>
                        <p>
                            MIĘDZY NASZYMI WARTOŚCIAMI <br />
                            Jakość i niezawodność są na pierwszym miejscu. Każdy z naszych klientów ma dla nas szczególne znaczenie. Żyjemy w rodzinnej atmosferze z naszymi klientami i naszym zespołem, mówiąc "szczęśliwy klient, szczęśliwy pracownik" w naszym rozumieniu handlu.

                        </p>
                        <p>
                            JESTEŚMY INNOWACYJNĄ FIRMĄ <br />
                            Nasz wyposażony i nowoczesny zakład produkcyjny jest w stanie dostosować się natychmiast, śledząc trendy i rozwój technologiczny przez nasze zespoły ekspertów. Nasza firma, która jest zawsze otwarta na innowacje i przejrzysta, kontynuuje ścieżkę rozwoju bez zatrzymywania się.
                        </p>
                    </div>
                ) : null
            }
            {
                lang === 'kg' ? (
                    <div className={style.about}>
                        <h1>БИЗ ЖӨНҮНДӨ </h1>
                        <p>
                            Liveme компаниясы 2022-жылы түзүлгөн.  <br />
                            Турцияда жайгашкан жана  жаш , динамикалуу фирма. Жаңычылдыктарга ачык, максаттарына көңүл бурган жана күн сайын өнүгүп келе жаткан компания. Ички жана тышкы эл аралык соода рыногун  акырындык менен кеңейтүүнү максат кылган бренд.  Орусия, Казакстан, Кыргызстан, Грузия, Украина, Германия жана Польша жана башка өлкөлөр менен кызматташат.
                        </p>
                        <p>
                            Биздин миссиябыз .  <br />
                            Liveme брендинин мааниси болгон "Жаша мени" урааны менен кардарларыбыз үчүн сапаттуу кызмат көрсөтүү .
                            Мындан тышкары,  көптөгөн ден соолукка жана сулуулукка пайдалуу товарларыбыз менен эң жакшы лидер компания болуу жолунда бара жатабыз.
                        </p>
                        <p>
                            Liveme максат.  <br />
                            Биз кардарларыбызга тынчтык жана бактылуу атмосфераны түзүп, кардарларыбызды жакшы сезе турган "Жытына көнгөн чөйрөнү эч качан унута албайсың" деген ураан менен тартуулоону улантабыз. Биздин жогорку өнүккөн технологиялар менен өндүрүш аймагыбызда эксперттик командабызды жана R&D-багытталган ишибизди дүйнөгө алып чыгабыз.
                        </p>
                        <p>
                            Биз көрөгөч структура менен бул секторго жаңы жашоо тартуулоо менен бардык кардарларыбызга ылайыктуу табигый жана чын ыкластуу бренд болууну улантабыз. Ар бир катмарга жана ар бир чөйрөгө ылайыктуу өнүмдөрүбүз менен табигый бакыт тартуулаган, келечекти ойлогон жана көрөгөч структурабыз менен секторго жаңы дем алып келген бренд болуу негизги максатыбыз.
                        </p>
                        <p>
                            БИЗДИН БААЛУУЛУКТАРДЫН АРАСЫНДА  <br />
                            Сапат жана ишенимдүүлүк биринчи орунда турат. Биздин кардарлардын ар бири биз үчүн өзгөчө мааниге ээ. Биз соода түшүнүгүбүздө "Бактылуу кардар, бактылуу кызматкер" деген эреже менен аракеттенебиз.
                        </p>
                        <p>
                            БИЗ ИННОВАЦИЯЛЫК КОМПАНИЯБЫЗ  <br />
                            Биздин заманбап өндүрүштүк жайыбыз жана эксперттик топтордун тенденциялары технологиялык өнүгүүлөрүнө көз салып, заматта ыңгайлаша алат. Ар дайым инновацияга ачык, айкын болгон компаниябыз өнүгүү жолунда токтобостон уланууда.
                        </p>
                    </div>
                ) : null
            }

        </>
    )
}
export default About;