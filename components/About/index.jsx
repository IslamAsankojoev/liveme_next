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

        </>
    )
}
export default About;