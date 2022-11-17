import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

import style from './index.module.scss'

const Policy = () => {
	const lang = useSelector((state) => state.lang.lang)
	return (
		<>
			<div className={style.policy}>
				{lang === 'tr' ? (
					<>
						<h1>GİZLİLİK VE GÜVENLİK POLİTİKASI</h1>
						<p>
							Liveme firmamızda verilen tüm servisler www.livemeshop.com
							adresinde kayıtlı ve firmamız tarafından işletilmektedir.
						</p>
						<p>
							Liveme firmamız, kişisel verileri çeşitli amaçlarla toplayabilir.
							Kişisel verilerin ne şekilde ve nasıl toplandığı, aynı zamanda bu
							verilen ne şekilde ve nasıl korunduğu belirtilmiştir.
						</p>
						<p>
							Elektronik mağazamız üzerinde bulunan üyelik ve çeşitli form,
							anketlerin doldurulması kaydıyla üyelerin bir takım şahsi
							bilgileri(isim-soy isim, firma bilgileri, adres, telefon veya
							e-posta adresleri vb. gibi) Mağazamız tarafından iş gereği
							toplanılmaktadır.
						</p>

						<p>
							Liveme firmamız bazı dönemlerde müşterilerine kampanya bilgisi,
							yeni ürünler hakkında bilgi, promosyon teklifler gönderebilir. Üye
							bu bilgileri alıp almama konusunda üye olurken seçim yapabilir.
							Daha sonrasında tekrardan üyelik ayarları kısmından bunu
							düzenleyebilir.
						</p>
						<p>
							Liveme mağazamız üzerinden veya e-posta aracılığıyla
							gerçekleştirelen onay sürecinde, üyelerimiz tarafından mağazamıza
							elektronik ortamda iletilen kişisel bilgiler, üyelerimizle
							gerçekleştirdiğimiz ‘’ Kullanıcı Sözleşmesi ‘’ ile belirlenen amaç
							ve kapsam dışında üçüncü kişiler ile paylaşılmayacaktır.
						</p>
						<p>
							Sistemsel herhangi bir sorunun tanımlanması ve veri hizmetlerinde
							oluşabilecek sorunların veya uyuşmazlıkların hızlıca çözümlenmesi
							için, Liveme firmamız, üyelerin IP adresini kaydetmekte ve
							kullanmaktadır. IP adresleri, kullanıcılarını genel bir şekilde
							tanımlamak ve demografik bilgiler toplamak amacıyla da
							kullanılabilmektedir.
						</p>
						<p>
							Liveme firmamız, Üyelik sözleşmesi ile belirlenen amaçlar ve
							kapsam dışında da, talep edilen bilgileri kendisi veya işbirliği
							içinde bulunduğu kişiler tarafınca doğrudan pazarlama yapmak
							amacıyla kullanılabilmektedir. Kişisel bilgiler, gerektiğinde
							kullanıcıyla temas kurmak için de kullanılabilir. Firmamız
							tarafından talep edilen bilgiler veya kullanıcı tarafından
							sağlanan bilgiler veya Mağazamız üzerinden yapılan işlemlerle
							ilgili bilgiler; Firmamız ve işbirliği içinde olduğu kişiler
							tarafından, "Üyelik Sözleşmesi" ile belirlenen amaçlar ve kapsam
							dışında da, üyelerimizin kimliği ifşa edilmeden çeşitli
							istatistiksel değerlendirmeler, veri tabanı oluşturma ve pazar
							araştırmalarında kullanılabilir.
						</p>
						<p>
							Firmamız, gizli bilgileri kesinlikle özel ve gizli tutmayı, bunu
							bir sır saklama yükümü olarak addetmeyi ve gizliliğin sağlanması
							ve sürdürülmesi, gizli bilginin tamamının veya herhangi bir
							kısmının kamu alanına girmesini veya yetkisiz kullanımını veya
							üçüncü bir kişiye ifşasını önlemek için gerekli tüm tedbirleri
							almayı ve gerekli özeni göstermeyi taahhüt etmektedir.
						</p>
						<h4>KREDİ KARTI GÜVENLİĞİ</h4>
						<p>
							Firmamız, alışveriş sitelerimizden alışveriş yapan kredi kartı
							sahiplerinin güvenliğini ilk planda tutmaktadır. Kredi kartı
							bilgileriniz hiçbir şekilde sistemimizde saklanmamaktadır.
						</p>
						<p>
							İşlemler sürecine girdiğinizde güvenli bir sitede olduğunuzu
							anlamak için dikkat etmeniz gereken iki şey vardır. Bunlardan biri
							tarayıcınızın en alt satırında bulunan bir anahtar ya da kilit
							simgesidir. Bu güvenli bir internet sayfasında olduğunuzu gösterir
							ve her türlü bilgileriniz şifrelenerek korunur. Bu bilgiler, ancak
							satış işlemleri sürecine bağlı olarak ve verdiğiniz talimat
							istikametinde kullanılır. Alışveriş sırasında kullanılan kredi
							kartı ile ilgili bilgiler alışveriş sitelerimizden bağımsız olarak
							128 bit SSL (Secure Sockets Layer) protokolü ile şifrelenip
							sorgulanmak üzere ilgili bankaya ulaştırılır. Kartın
							kullanılabilirliği onaylandığı takdirde alışverişe devam edilir.
							Kartla ilgili hiçbir bilgi tarafımızdan görüntülenemediğinden ve
							kaydedilmediğinden, üçüncü şahısların herhangi bir koşulda bu
							bilgileri ele geçirmesi engellenmiş olur.
						</p>
						<p>
							Online olarak kredi kartı ile verilen siparişlerin
							ödeme/fatura/teslimat adresi bilgilerinin güvenilirliği firmamiz
							tarafından Kredi Kartları Dolandırıcılığı'na karşı
							denetlenmektedir. Bu yüzden, alışveriş sitelerimizden ilk defa
							sipariş veren müşterilerin siparişlerinin tedarik ve teslimat
							aşamasına gelebilmesi için öncelikle finansal ve adres/telefon
							bilgilerinin doğruluğunun onaylanması gereklidir. Bu bilgilerin
							kontrolü için gerekirse kredi kartı sahibi müşteri ile veya ilgili
							banka ile irtibata geçilmektedir.
						</p>
						<p>
							Üye olurken verdiğiniz tüm bilgilere sadece siz ulaşabilir ve siz
							değiştirebilirsiniz. Üye giriş bilgilerinizi güvenli koruduğunuz
							takdirde başkalarının sizinle ilgili bilgilere ulaşması ve bunları
							değiştirmesi mümkün değildir. Bu amaçla, üyelik işlemleri
							sırasında 128 bit SSL güvenlik alanı içinde hareket edilir. Bu
							sistem kırılması mümkün olmayan bir uluslararası bir şifreleme
							standardıdır.
						</p>
						<p>
							Bilgi hattı veya müşteri hizmetleri servisi bulunan ve açık adres
							ve telefon bilgilerinin belirtildiği İnternet alışveriş siteleri
							günümüzde daha fazla tercih edilmektedir. Bu sayede aklınıza
							takılan bütün konular hakkında detaylı bilgi alabilir, online
							alışveriş hizmeti sağlayan firmanın güvenirliği konusunda daha
							sağlıklı bilgi edinebilirsiniz.
						</p>
						<p>
							Not: İnternet alışveriş sitelerinde firmanın açık adresinin ve
							telefonun yer almasına dikkat edilmesini tavsiye ediyoruz.
							Alışveriş yapacaksanız alışverişinizi yapmadan ürünü aldığınız
							mağazanın bütün telefon / adres bilgilerini not edin. Eğer
							güvenmiyorsanız alışverişten önce telefon ederek teyit edin.
							Firmamıza ait tüm online alışveriş sitelerimizde firmamıza dair
							tüm bilgiler ve firma yeri belirtilmiştir.
						</p>
						<h4>MAİL ORDER KREDİ KART BİLGİLERİ GÜVENLİĞİ</h4>
						<p>
							Kredi kartı mail-order yöntemi ile bize göndereceğiniz kimlik ve
							kredi kart bilgileriniz firmamız tarafından gizlilik prensibine
							göre saklanacaktır. Bu bilgiler olası banka ile oluşubilecek kredi
							kartından para çekim itirazlarına karşı 60 gün süre ile bekletilip
							daha sonrasında imha edilmektedir. Sipariş ettiğiniz ürünlerin
							bedeli karşılığında bize göndereceğiniz tarafınızdan onaylı
							mail-order formu bedeli dışında herhangi bir bedelin kartınızdan
							çekilmesi halinde doğal olarak bankaya itiraz edebilir ve bu
							tutarın ödenmesini engelleyebileceğiniz için bir risk
							oluşturmamaktadır.
						</p>
						<p>
							<h4>ÜÇÜNCÜ TARAF WEB SİTELERİ VE UYGULAMALAR</h4>
							Mağazamız, web sitesi dâhilinde başka sitelere link verebilir.
							Firmamız, bu linkler vasıtasıyla erişilen sitelerin gizlilik
							uygulamaları ve içeriklerine yönelik herhangi bir sorumluluk
							taşımamaktadır. Firmamıza ait sitede yayınlanan reklamlar,
							reklamcılık yapan iş ortaklarımız aracılığı ile kullanıcılarımıza
							dağıtılır. İş bu sözleşmedeki Gizlilik Politikası Prensipleri,
							sadece Mağazamızın kullanımına ilişkindir, üçüncü taraf web
							sitelerini kapsamaz.
						</p>
						<h4>İSTİSNAİ HALLER</h4>
						<p>
							Aşağıda belirtilen sınırlı hallerde Firmamız, işbu "Gizlilik
							Politikası" hükümleri dışında kullanıcılara ait bilgileri üçüncü
							kişilere açıklayabilir. Bu durumlar sınırlı sayıda olmak üzere;
							1.Kanun, Kanun Hükmünde Kararname, Yönetmelik v.b. yetkili hukuki
							otorite tarafından çıkarılan ve yürürlülükte olan hukuk
							kurallarının getirdiği zorunluluklara uymak; 2.Mağazamızın
							kullanıcılarla akdettiği "Üyelik Sözleşmesi"'nin ve diğer
							sözleşmelerin gereklerini yerine getirmek ve bunları uygulamaya
							koymak amacıyla; 3.Yetkili idari ve adli otorite tarafından
							usulüne göre yürütülen bir araştırma veya soruşturmanın yürütümü
							amacıyla kullanıcılarla ilgili bilgi talep edilmesi;
							4.Kullanıcıların hakları veya güvenliklerini korumak için bilgi
							vermenin gerekli olduğu hallerdir.
						</p>
						<h4>E-POSTA GÜVENLİĞİ</h4>
						<p>
							Mağazamızın Müşteri Hizmetleri’ne, herhangi bir siparişinizle
							ilgili olarak göndereceğiniz e-postalarda, asla kredi kartı
							numaranızı veya şifrelerinizi yazmayınız. E-postalarda yer alan
							bilgiler üçüncü şahıslar tarafından görülebilir. Firmamız
							e-postalarınızdan aktarılan bilgilerin güvenliğini hiçbir koşulda
							garanti edemez.
						</p>
						<h4>TARAYICI ÇEREZLERİ</h4>
						<p>
							Firmamız, mağazamızı ziyaret eden kullanıcılar ve kullanıcıların
							web sitesini kullanımı hakkındaki bilgileri teknik bir iletişim
							dosyası (Çerez-Cookie) kullanarak elde edebilir. Bahsi geçen
							teknik iletişim dosyaları, ana bellekte saklanmak üzere bir
							internet sitesinin kullanıcının tarayıcısına (browser) gönderdiği
							küçük metin dosyalarıdır. Teknik iletişim dosyası site hakkında
							durum ve tercihleri saklayarak İnternet'in kullanımını
							kolaylaştırır.
						</p>
						<p>
							Teknik iletişim dosyası, siteyi kaç kişinin ziyaret ettiğini, bir
							kişinin siteyi hangi amaçla, kaç kez ziyaret ettiğini ve ne kadar
							sitede kaldıkları hakkında istatistiksel bilgileri elde etmeye ve
							kullanıcılar için özel tasarlanmış kullanıcı sayfalarından dinamik
							olarak reklam ve içerik üretilmesine yardımcı olur. Teknik
							iletişim dosyası, ana bellekte veya e-postanızdan veri veya
							başkaca herhangi bir kişisel bilgi almak için tasarlanmamıştır.
							Tarayıcıların pek çoğu başta teknik iletişim dosyasını kabul eder
							biçimde tasarlanmıştır ancak kullanıcılar dilerse teknik iletişim
							dosyasının gelmemesi veya teknik iletişim dosyasının
							gönderildiğinde uyarı verilmesini sağlayacak biçimde ayarları
							değiştirebilirler.
						</p>
						<p>
							Firmamız, işbu "Gizlilik Politikası" hükümlerini dilediği zaman
							sitede yayınlamak veya kullanıcılara elektronik posta göndermek
							veya sitesinde yayınlamak suretiyle değiştirebilir. Gizlilik
							Politikası hükümleri değiştiği takdirde, yayınlandığı tarihte
							yürürlük kazanır.
						</p>

						<p>
							Gizlilik politikamız ile ilgili her türlü soru ve önerileriniz
							için{' '}
							<a href="mailto:support@livemeshop.com">support@livemeshop.com</a>{' '}
							adresine email gönderebilirsiniz. Firmamız’a ait aşağıdaki
							iletişim bilgilerinden ulaşabilirsiniz.
						</p>

						<p>
							Firma Ünvanı: Liveme
							<br />
							Adres: Kırgızistan, Bişkek
							<br />
							Chuy 219
							<br />
							Eposta:{' '}
							<a href="mailto:support@livemeshop.com">support@livemeshop.com</a>
							<br />
							Tel: <a href="tel:+996 708 022 101">+996 708 022 101</a>
						</p>
					</>
				) : null}
				{lang === 'kg' ? (
					<>
						<h1>КУПУЯЛУУЛУК ЖАНА КООПСУЗДУК САЯСАТЫ</h1>
						<p>
							Биздин Liveme компаниясында көрсөтүлгөн бардык кызматтар{' '}
							<Link href="/">
								<a>www.livemeshop.com</a>
							</Link>{' '}
							сайтында катталган жана компания тарабынан ишке ашырылат.
						</p>

						<p>
							Биздин Liveme компаниябыз ар кандай максаттар үчүн жеке
							маалыматтарды жыйнай алат. Жеке маалыматтар кантип чогултулары,
							ошондой эле бул маалыматтар компания тарабынан кантип корголо
							тургандыгы көрсөтүлөт.
						</p>

						<p>
							Онлайн дүкөн тарабынан ар кандай формалар жана сурамжылоолордун
							жардамы менен мүчөлөрдүн жеке маалыматы (мисалы, аты-жөнү,
							компаниянын маалыматы, дареги, телефон же электрондук почта
							даректери ж.б. сыяктуу) бизнес максаттары үчүн чогултулат.
						</p>

						<p>
							Биздин Liveme компаниябыз айрым мезгилдерде өнөктүк маалыматын,
							жаңы өнүмдөр тууралуу маалыматты, жарнамалык сунуштарды
							кардарларына жөнөтүшү мүмкүн. Мүчө бул маалыматты алуу же албоо
							чечимин мүчө болуп жатканда тандай алат. Кийинчерээк, сиз аны
							мүчөлүк жөндөөлөрү бөлүмүнөн кайра түзөтө аласыз.
						</p>

						<p>
							Liveme дүкөнүбүз аркылуу же электрондук почта аркылуу ишке
							ашырылган бекитүү процессинде, биздин мүчөлөрүбүз тарабынан
							дүкөнүбүзгө электрондук түрдө берилген жеке маалымат биз менен
							түзгөн "Колдонуучу келишиминде" аныкталган максаттардан жана
							көлөмдөн башка үчүнчү жактар ​​менен бөлүшүлбөйт. <br />
							Биздин Liveme компаниябыз системалык көйгөйлөрдү аныктоо жана
							маалымат кызматтарында келип чыгышы мүмкүн болгон көйгөйлөрдү же
							чыр-чатакты тез чечүү үчүн өз мүчөлөрүнүн IP дарегин жазып алат
							жана колдонот. IP даректерди жалпы түрдө колдонуучуларды аныктоо
							жана демографиялык маалыматты чогултуу үчүн да колдонсо болот.
						</p>

						<p>
							Ошондой эле биздин компаниябыз мүчөлүк келишиминде аныкталган
							максаттарды жана көлөмдү кошпогондо, суралган маалыматты
							түздөн-түз маркетинг максаттары үчүн өзү же ал кызматташкан
							адамдар колдоно алат. Жеке маалымат керек болгондо колдонуучу
							менен байланышуу үчүн да колдонулушу мүмкүн. Биздин компания тадап
							кылынган маалымат же колдонуучу берген маалымат же биздин дүкөн
							аркылуу жасалган транзакциялар жөнүндө маалымат; Бул ар кандай
							статистикалык баалоодо, маалымат базасын түзүүдө жана рынокту
							изилдөөдө, биздин компания жана анын өнөктөштөрү тарабынан
							"Мүчөлүк келишиминде" аныкталган максаттарды жана чөйрөнү
							кошпогондо, биздин мүчөлөрүнүн инсандыгын ачыкка чыгарбастан
							колдонулушу мүмкүн.
						</p>
						<p>
							Биздин компания купуя маалыматты катуу жеке жана купуя сактоо, аны
							купуялуулук милдеттенмеси деп эсептеп, купуялуулукту камсыз кылуу
							жана сактоо, бардык зарыл чараларды көрүү жана купуя маалыматтын
							бардык же кандайдыр бир бөлүгүнүн коомдук доменге киришине жол
							бербөө үчүн бардык зарыл болгон кам көрүү же уруксатсыз пайдалануу
							же үчүнчү тарапка ачыкка чыгарууга милдеттүү.
						</p>

						<p>
							Кредиттик картанын коопсуздугу <br />
							Биздин компания биздин соода сайттарында соода кылган кредиттик
							карта ээлеринин коопсуздугуна артыкчылык берет. Сиздин кредиттик
							карта маалыматы биздин системада эч кандай сакталган эмес.
						</p>

						<p>
							Транзакция процессине киргенде, сиз коопсуз сайтта экениңизди
							түшүнүү үчүн эки нерсеге көңүл бурушуңуз керек. Алардын бири
							браузериңиздин төмөнкү сапындагы ачкыч болуп эсептелет. Бул сиздин
							коопсуз веб-сайтта экениңизди жана бардык маалыматыңыз шифрленген
							жана корголгондугун билдирет. Бул маалымат сатуу процессине жараша
							жана сиздин көрсөтмөлөрүңүз боюнча гана колдонулат. Соода учурунда
							колдонулган кредиттик карта тууралуу маалымат биздин соода
							сайттарыбыздан көз карандысыз 128-бит SSL (Коопсуз Sockets Layer)
							протоколу менен шифрленген жана тиешелүү банкка суракка жөнөтүлөт.
							Эгер картанын бар экендиги тастыкталса, соода кылуу үчүн туруктуу
							болушу мүмкүн. Карта жөнүндө эч кандай маалымат биз тарабынан
							көрүү жана жазуу мүмкүн болбогондуктан, үчүнчү жактарга эч кандай
							шартта бул маалыматты алууга тыюу салынат.
						</p>
						<p>
							Кредиттик карта аркылуу онлайн берилген буйрутмалардын
							төлөм/эсеп-фактура/жеткирүү дареги маалыматынын ишенимдүүлүгү
							биздин компания тарабынан Кредиттик карта алдамчылыгына каршы
							текшерилет. Ошондуктан, биринчи жолу биздин соода сайттарыбыздан
							буйрутма берген кардарлар сатып алуу жана жеткирүү стадиясына
							келиши үчүн, биринчи кезекте финансылык жана дарек/телефон
							маалыматынын тактыгы тастыкталууга тийиш. Бул маалыматты
							көзөмөлдөө үчүн зарыл болгон учурда кредиттик картасы бар кардар
							же тиешелүү банк менен байланышат.
						</p>
						<p>
							Мүчө болуп жатканда берген бардык маалыматыңызга сиз гана кире
							аласыз жана өзгөртө аласыз. Эгер сиз мүчөлүк кирүү маалыматыңызды
							коопсуз коргосоңуз, башкалар сиз жөнүндө маалыматка кирүү жана
							өзгөртүү мүмкүн эмес. Бул максатта, ал мүчөлүк транзакциялар
							учурунда 128-бит SSL коопсуздук аймагынын ичинде иш-аракет кылат.
							Бул система эл аралык шифрлөө стандарты болуп саналат, аны бузууга
							болбойт.
						</p>

						<p>
							Маалымат линиясы же кардарларды тейлөө кызматы бар жана толук
							дареги жана телефон маалыматы көрсөтүлгөн интернет соода сайттары
							бүгүнкү күндө көбүрөөк артыкчылыкка ээ. Ушундай жол менен сиз
							башыңызга келген бардык маселелер боюнча кеңири маалымат ала
							аласыз жана онлайн соода кызматын көрсөткөн компаниянын
							ишенимдүүлүгү тууралуу маалымат ала аласыз.
						</p>
						<p>
							Эскертүү: Интернет-соода сайттарында компаниянын дарегин жана
							телефон номерин толук жазбаңыз. Ага көңүл бурууну сунуштайбыз Эгер
							сиз дүкөнгө бара турган болсоңуз, соода кылуудан мурун товарды
							сатып алган дүкөндүн бардык телефон/даректерин жазып алыңыз. Сатып
							алуудан мурун ишенбесеңиз телефон аркылуу ырастаңыз. Биздин
							компания жөнүндө бардык маалыматтар жана компаниянын жайгашкан
							жери биздин бардык онлайн соода сайттарында көрсөтүлгөн.
						</p>

						<h3>ПОЧТА ЗАКАЗЫ</h3>
						<p>
							Кредиттик карта боюнча маалыматтык коопсуздук <br />
							Кредит карта почта-буйрутма ыкмасы менен бизге жөнөтө турган жеке
							маалыматтарыныз жана кредиттик карта маалыматыңыз биздин
							компанияда купуялуулук принцибине ылайык сакталат. Бул маалымат
							банк менен кредиттик картаны алуу мүмкүн болгон каршылыктарга
							каршы 60 күн сакталып, андан кийин жок кылынат. Картаңыздан
							буйрутма берген продукциянын баасынын ордуна сиз бизге жөнөтө
							турган почта заказ формасынын наркынан башка кандайдыр бир сумма
							сиздин картаңыздан алынып салынса, сиз табигый түрдө банкка каршы
							чыга аласыз. Тобокелдикке жол бербеңиз, анткени бул сумманы
							төлөөгө тоскоол боло аласыз.
						</p>
						<p>
							ҮЧҮНЧҮ ТАРАП ВЕБ САЙТТАР ЖАНА КОЛДОНМОЛОР <br />
							Биздин дүкөн веб-сайттын ичиндеги башка сайттарга шилтеме бере
							алат. Биздин компания бул шилтемелер аркылуу кирген сайттардын
							купуялык практикасы жана мазмуну үчүн эч кандай жоопкерчилик
							тартпайт. Биздин компаниянын сайтында жарыяланган жарнактар
							​​биздин жарнама өнөктөштөрүбүз аркылуу колдонуучуларыбызга
							таратылат. Бул келишимдеги Купуялык саясатынын принциптери биздин
							дүкөндү колдонуу үчүн гана жана үчүнчү тараптын веб-сайттарын
							камтыбайт.
						</p>
						<p>
							ӨЗГӨЧӨ ЖАГДАЙЛАР <br />
							Төмөндө көрсөтүлгөн чектелген учурларда, биздин компания ушул
							"Купуялык саясатынын" жоболорун кошпогондо, колдонуучулардын
							маалыматын үчүнчү жактарга ачып бере алат. Бул иштердин саны
							чектелген; 1. Мыйзам, Жарлык-Мыйзам, Жобо ж.б. компетенттүү
							юридикалык орган тарабынан кабыл алынган мыйзам ченемдери менен
							жүктөлгөн милдеттерди аткарууга; 2. Биздин дүкөндүн колдонуучулар
							менен түзгөн “Мүчөлүк келишиминин” жана башка келишимдердин
							талаптарын аткаруу жана иш жүзүндө колдонуу максатында; 3. Ыйгарым
							укуктуу административдик жана соттук орган тарабынан талаптагыдай
							түрдө жүргүзүлгөн териштирүү же тергөө жүргүзүү максатында
							пайдалануучулар жөнүндө маалыматтарды суроо; 4. Колдонуучулардын
							укуктарын же коопсуздугун коргоо максатында маалымат берүү зарыл.
						</p>

						<p>
							ПОЧТА КООПСУЗДУГУ <br />
							Биздин дүкөндүн кардарларды тейлөө кызматына жөнөткөн электрондук
							каттарга эч качан насыя картаңыздын номерин же сырсөзүңүздү
							жазбаңыз. Электрондук каттарда камтылган маалыматты үчүнчү жактар
							​​көрө алышат. Биздин компания сиздин электрондук почтаңыздан
							алынган маалыматтын коопсуздугуна эч кандай шартта кепилдик бере
							албайт.
						</p>
						<p>
							Браузерлердин Куукилери <br />
							Биздин компания биздин дүкөнгө кирген колдонуучулар жана
							веб-сайтты колдонуу жөнүндө маалыматты техникалык байланыш файлын
							(Cookie) колдонуу менен ала алат. Белгиленген техникалык байланыш
							файлдары веб-сайт негизги эстутумда сакталуу үчүн колдонуучунун
							браузерине жөнөткөн кичинекей текст файлдары. Техникалык байланыш
							файлы сайттын статусун жана артыкчылыктарын сактоо менен
							Интернетти колдонууга көмөктөшөт.
						</p>
						<p>
							Техникалык коммуникация файлы сайтка канча адам киргени, кандай
							максатта, канча жолу киргени жана сайтта канча убакыт тургандыгы
							тууралуу статистикалык маалыматты алууга жана атайын иштелип
							чыккан колдонуучу баракчаларынан динамикалык түрдө жарнамаларды
							жана контентти түзүүгө жардам берет. Техникалык байланыш файлы
							негизги эстутумдан же сиздин электрондук почтаңыздан маалыматтарды
							же башка жеке маалыматты алуу үчүн иштелип чыккан эмес.
							Браузерлердин көбү алгач техникалык байланыш файлын кабыл алуу
							үчүн иштелип чыккан, бирок колдонуучулар техникалык байланыш файлы
							келбеши үчүн же техникалык байланыш файлы жөнөтүлгөндө эскертүү
							берилиши үчүн орнотууларды өзгөртө алышат.
						</p>

						<p>
							Биздин компания бул "Купуялык саясатынын" жоболорун каалаган
							убакта сайтка жайгаштыруу же колдонуучуларга электрондук кат
							жөнөтүү же өзүнүн сайтында жарыялоо аркылуу өзгөртө алат. Эгерде
							Купуялык саясатынын шарттары өзгөртүлсө, алар жарыяланган күндөн
							тартып күчүнө кирет.
						</p>
						<p>
							Купуялык саясатыбызга байланыштуу суроолор же сунуштар үчүн
							support@livemeshop.com дарегине электрондук кат жөнөтсөңүз болот.
							Төмөндө биздин компаниянын байланыш маалыматына кайрылсаңыз болот.
						</p>
						<p>
							Компаниянын аталышы: Liveme <br />
							Дареги: Кыргызстан, Бишкек, Чүй 219 <br />
							Электрондук почта:{' '}
							<a href="mailto:support@livemeshop.com">support@livemeshop.com</a>
							<br />
							Тел: <a href="tel:+996 708 022 101">+996 708 022 101</a>
						</p>
					</>
				) : null}
				{lang === 'ru' ? (
					<>
						<h1>Политика конфиденциальности</h1>
						<p>
							Все услуги, предоставляемые нашей компанией Liveme,
							зарегистрированы на сайте{' '}
							<Link href="/">
								<a>www.livemeshop.com</a>
							</Link>{' '}
							и управляются нашей компанией.
						</p>
						<p>
							Наша компания Liveme может собирать персональные данные для
							различных целей. Указано, как и каким образом собираются
							персональные данные, а также как и как эти данные защищаются.
							Личная информация участников (например, имя-фамилия, информация о
							компании, адрес, телефон или адрес электронной почты и т. д.)
							участников собирается нашим магазином для деловых целей при
							условии, что членство и различные формы и опросы на нашем
							электронном магазин заполняется.
						</p>
						<p>
							Наша компания Liveme может отправлять информацию о кампании,
							информацию о новых продуктах, рекламные предложения своим клиентам
							в определенные периоды. Участник может выбрать, получать эту
							информацию или нет, становясь участником. Позже вы можете
							отредактировать его снова в разделе настроек подписки. Во время
							процесса утверждения, осуществляемого через наш магазин Liveme или
							по электронной почте, личная информация, передаваемая в наш
							магазин в электронном виде нашими участниками, не будет
							передаваться третьим лицам, за исключением целей и объема,
							определенных «Пользовательским соглашением», которое мы заключили
							с нашими участниками.
						</p>
						<p>
							Наша компания Liveme записывает и использует IP-адреса своих
							участников, чтобы выявлять любые системные проблемы и быстро
							решать любые проблемы или конфликты, которые могут возникнуть в
							службах данных. IP-адреса также могут использоваться для общей
							идентификации пользователей и сбора демографической информации.
							Наша компания Liveme также может использовать запрошенную
							информацию в целях прямого маркетинга самостоятельно или людьми, с
							которыми она сотрудничает, за исключением целей и объема,
							определенных Соглашением о членстве. Личная информация также может
							быть использована для связи с пользователем, когда это необходимо.
							Информация, запрошенная нашей компанией, или информация,
							предоставленная пользователем, или информация о транзакциях,
							совершенных через наш Магазин; Его можно использовать в различных
							статистических оценках, создании баз данных и исследованиях рынка
							без раскрытия личности наших участников, за исключением целей и
							объема, определенных «Соглашением о членстве» нашей компанией и ее
							сотрудниками.
						</p>
						<p>
							Наша компания, хранить конфиденциальную информацию и обеспечивать
							строгую приватность и конфиденциальность, считать ее
							обязательством по соблюдению конфиденциальности, обеспечивать и
							поддерживать конфиденциальность, принимать все необходимые меры и
							проявлять всю необходимую осторожность, чтобы предотвратить
							попадание всей или какой-либо части конфиденциальной информации в
							общественное достояние или несанкционированное использование или
							раскрытие третьим лицам. обязуется показать
						</p>
						<p>
							БЕЗОПАСНОСТЬ КРЕДИТНОЙ КАРТЫ <br />
							Наша компания уделяет первостепенное внимание безопасности
							держателей кредитных карт, совершающих покупки на наших торговых
							площадках. Информация о вашей кредитной карте никоим образом не
							хранится в нашей системе.
						</p>
						<p>
							Когда вы входите в процесс транзакции, вам нужно обратить внимание
							на две вещи, чтобы понять, что вы находитесь на безопасном сайте.
							Одним из них является значок ключа или замка в нижней строке
							браузера. Это означает, что вы находитесь на безопасном веб-сайте,
							и вся ваша информация зашифрована и защищена. Эта информация
							используется только в зависимости от процесса продажи и в
							соответствии с вашими инструкциями. Информация о кредитной карте,
							использованной во время покупок, шифруется с помощью 128-битного
							протокола SSL (Secure Sockets Layer), независимого от наших
							торговых сайтов, и отправляется в соответствующий банк для
							допроса. Если наличие карты одобрено, можно сохранить для покупок.
							Поскольку никакая информация о карте не может быть просмотрена и
							записана нами, третьи лица не могут получить эту информацию ни при
							каких обстоятельствах.
						</p>
						<p>
							Надежность информации об оплате/счете/адресе доставки заказов,
							размещенных в Интернете с помощью кредитной карты, проверяется
							нашей компанией на предмет мошенничества с кредитными картами.
							Таким образом, точность финансовой и адресной/телефонной
							информации должна быть сначала подтверждена, чтобы клиенты,
							которые делают заказ на наших торговых площадках в первый раз,
							могли перейти на этап закупки и доставки. Для контроля этой
							информации при необходимости связываются с клиентом, у которого
							есть кредитная карта, или с соответствующим банком.
						</p>

						<p>
							Только вы можете получить доступ и изменить всю информацию,
							которую вы предоставляете, став участником. Если вы надежно
							защитите свою регистрационную информацию, другие не смогут
							получить доступ и изменить информацию о вас. С этой целью он
							действует в пределах 128-битной зоны безопасности SSL во время
							транзакций членства. Эта система представляет собой международный
							стандарт шифрования, который невозможно нарушить.
						</p>

						<p>
							Интернет-магазины с информационной линией или службой поддержки
							клиентов, где указаны полный адрес и телефон, сегодня более
							предпочтительны. Таким образом, вы можете получить подробную
							информацию обо всех проблемах, которые приходят вам на ум, и
							получить более полезную информацию о надежности компании,
							предоставляющей услуги онлайн-покупок.
						</p>

						<p>
							Примечание: рекомендуем обращать внимание на полный адрес и
							телефон компании на сайтах интернет-магазинов. Если вы собираетесь
							делать покупки, запишите всю информацию о телефоне / адресе
							магазина, где вы купили продукт, прежде чем делать покупки. Если
							вы не доверяете то, позвоните по номеру телефона , которая указана
							на сайте. Вся информация о нашей компании и местонахождении
							компании указана на всех наших сайтах и интернет-магазине.
						</p>

						<p>
							ИНФОРМАЦИЯ О БЕЗОПАСНОСТИ КРЕДИТНОЙ КАРТЫ <br />
							Информация о вашей личности и кредитной карте, которую вы
							отправите нам по почте, будет храниться нашей компанией в
							соответствии с принципом конфиденциальности. Эта информация
							хранится в течение 60 дней на случай возможных возражений банка по
							снятию средств с кредитной карты, а затем уничтожается. Если с
							вашей карты будет снята какая-либо сумма, кроме стоимости
							одобренной вами, вы можете возразить, выплате этой суммы.
						</p>

						<p>
							СТОРОННИЕ ВЕБ-САЙТЫ И ПРИЛОЖЕНИЯ <br />
							Наш магазин может ссылаться на другие сайты . Наша компания не
							несет никакой ответственности за политику конфиденциальности и
							содержание сайтов. Рекламные объявления, опубликованные на
							веб-сайте нашей компании, распространяются среди наших
							пользователей через наших рекламных партнеров. Принципы политики
							конфиденциальности в этом соглашении предназначены только для
							использования нашего Магазина и не распространяются на сторонние
							веб-сайты.
						</p>

						<p>
							ИСКЛЮЧИТЕЛЬНЫЕ ОБСТОЯТЕЛЬСТВА <br />
							В некоторых случаях, указанных ниже, наша компания может
							раскрывать информацию о пользователях третьим лицам, за
							исключением положений «Политики конфиденциальности». Эти случаи
							ограничены по количеству; <br />
							1. Закон, Положение и т.д. соблюдать обязательства, налагаемые
							правовыми нормами, принятыми компетентным юридическим органом;{' '}
							<br />
							2. В целях выполнения требований «Соглашения о членстве» и других
							договоров, заключенных нашим магазином с пользователями, и
							реализации их на практике; <br />
							3. Запрос информации о пользователях с целью проведения
							расследования или расследования, должным образом проведенного
							уполномоченным административным и судебным органом; <br />
							4. Необходимо предоставить информацию для защиты прав или без
							опасности пользователей.
						</p>

						<p>
							БЕЗОПАСНОСТЬ ЭЛЕКТРОННОЙ ПОЧТЫ <br />
							Никогда не записывайте номер своей кредитной карты или пароли в
							электронных письмах, которые вы отправляете в службу поддержки
							клиентов нашего магазина относительно любого из ваших заказов.
							Информация, содержащаяся в электронных письмах, может быть
							просмотрена третьими лицами. Наша компания ни при каких
							обстоятельствах не может гарантировать безопасность информации,
							передаваемой с ваших электронных писем.
						</p>
						<p>
							БРАУЗЕРНЫЕ КУКИ <br />
							Наша компания может получать информацию о пользователях,
							посещающих наш магазин и об использовании веб-сайта, используя
							файл технической связи (Cookie). Упомянутые файлы Cookie
							представляют собой небольшие текстовые файлы, которые веб-сайт
							отправляет в браузер пользователя для сохранения в основной
							памяти. Файлы Cookie облегчает использование Интернета, сохраняя
							статус и настройки сайта.
						</p>

						<p>
							Файл технической коммуникации помогает получить статистическую
							информацию о том, сколько людей посещает сайт, с какой целью,
							сколько раз в день посещает сайт и как долго он находится на
							сайте, а также динамически генерировать рекламу и контент со
							специально разработанных пользовательских страниц. Файлы Cookie не
							предназначен для извлечения данных или любой другой личной
							информации из оперативной памяти или вашей электронной почты.
							Большинство браузеров изначально предназначены для приема файла
							Cookie . Но, пользователи могут изменить настройки таким образом,
							чтобы файлы Cookie не поступали.
						</p>

						<p>
							Наша компания может изменить положения настоящей «Политики
							конфиденциальности» в любое время, разместив ее на сайте, отправив
							электронное письмо пользователям или опубликовав ее на своем
							сайте. Если условия Политики конфиденциальности будут изменены,
							они вступят в силу с даты публикации.
						</p>

						<p>
							По любым вопросам или предложениям относительно нашей политики
							конфиденциальности вы можете отправить электронное письмо по
							адресу support@livemeshop.com. Вы можете найти контактную
							информацию нашей компании ниже.
						</p>
						<p>
							Компания: Liveme <br />
							Адрес: Кыргызстан, Бишкек, Чүй 219 <br />
							Электронная почта:{' '}
							<a href="mailto:support@livemeshop.com">support@livemeshop.com</a>
							<br />
							Тел: <a href="tel:+996 708 022 101">+996 708 022 101</a>
						</p>
					</>
				) : null}
				{lang === 'en' ? (
					<>
						<h1>Privacy policy</h1>
						<p>
							All services provided by our company Liveme are registered on the
							website www.livemeshop.com and are managed by our company.
						</p>
						<p>
							Our company Liveme may collect personal data for various purposes.
							It specifies how and how personal data is collected, as well as
							how and how this data is protected. Personal information of
							participants (for example, first name, last name, company
							information, address, phone or email address, etc.) of
							participants is collected by our store for business purposes,
							provided that membership and various forms and surveys on our
							electronic store are filled out.
						</p>
						<p>
							Our company Liveme can send information about the campaign,
							information about new products, promotional offers to its
							customers during certain periods. The participant can choose
							whether to receive this information or not by becoming a
							participant. You can edit it again later in the subscription
							settings section. During the approval process carried out through
							our Liveme store or by e-mail, personal information transmitted to
							our store electronically by our members will not be transferred to
							third parties, except for the purposes and scope defined by the
							"User Agreement" that we have concluded with our members.
						</p>
						<p>
							Our company Liveme records and uses the IP addresses of its
							members to identify any system problems and quickly resolve any
							problems or conflicts that may arise in the data services. IP
							addresses can also be used for general user identification and
							demographic information collection. Our company Liveme may also
							use the requested information for direct marketing purposes on its
							own or by people with whom it cooperates, except for the purposes
							and scope defined by the Membership Agreement. Personal
							information can also be used to contact the user when necessary.
							Information requested by our company, or information provided by
							the user, or information about transactions made through our
							Store; It can be used in various statistical assessments, database
							creation and market research without disclosing the identity of
							our participants, except for the purposes and scope defined by the
							"Membership Agreement" by our company and its employees.
						</p>

						<p>
							Our company, to keep confidential information and ensure strict
							privacy and confidentiality, to consider it an obligation to
							respect confidentiality, to ensure and maintain confidentiality,
							to take all necessary measures and exercise all necessary care to
							prevent all or any part of confidential information from entering
							the public domain or unauthorized use or disclosure to third
							parties. undertakes to show
						</p>

						<p>
							CREDIT CARD SECURITY <br />
							Our company pays primary attention to the security of credit card
							holders who make purchases on our trading platforms. Your credit
							card information is not stored in our system in any way.
						</p>

						<p>
							When you enter the transaction process, you need to pay attention
							to two things to understand that you are on a secure site. One of
							them is the key or lock icon in the bottom line of the browser.
							This means that you are on a secure website and all your
							information is encrypted and protected. This information is used
							only depending on the sales process and in accordance with your
							instructions. The credit card information used during purchases is
							encrypted using the 128-bit SSL (Secure Sockets Layer) protocol,
							independent of our trading sites, and sent to the appropriate bank
							for questioning. If the card is approved, you can save it for
							purchases. Since no card information can be viewed and recorded by
							us, third parties cannot obtain this information under any
							circumstances.
						</p>

						<p>
							The reliability of payment/invoice/delivery address information
							for orders placed online using a credit card is checked by our
							company for credit card fraud. Thus, the accuracy of financial and
							address/telephone information must first be confirmed so that
							customers who place an order on our trading platforms for the
							first time can proceed to the stage of purchase and delivery. To
							control this information, if necessary, contact the customer who
							has a credit card or the relevant bank.
						</p>

						<p>
							Only you can access and change all the information you provide by
							becoming a member. If you securely protect your registration
							information, others will not be able to access and change
							information about you. To this end, it operates within the 128-bit
							SSL security zone during membership transactions. This system is
							an international encryption standard that cannot be broken.
						</p>

						<p>
							Online stores with an information line or customer support
							service, where the full address and phone number are indicated,
							are more preferable today. This way you can get detailed
							information about all the problems that come to your mind and get
							more useful information about the reliability of the company
							providing online shopping services.
						</p>

						<p>
							Note: we recommend paying attention to the full address and phone
							number of the company on the websites of online stores. If you are
							going to shop, write down all the information about the phone
							/address of the store where you bought the product before you make
							purchases. If you don't trust the, call the phone number that is
							listed on the website. All information about our company and the
							location of the company is listed on all our websites and online
							store.
						</p>

						<p>
							CREDIT CARD SECURITY INFORMATION <br />
							The information about your identity and credit card that you send
							to us by mail will be stored by our company in accordance with the
							principle of confidentiality. This information is stored for 60
							days in case of possible objections by the bank to withdraw funds
							from the credit card, and then destroyed. If any amount is
							withdrawn from your card other than the value approved by you, you
							can object to the payment of this amount.
						</p>

						<p>
							THIRD-PARTY WEBSITES AND APPLICATIONS <br />
							Our store may link to other sites. Our company assumes no
							responsibility for the privacy policy and the content of the
							sites. Advertisements published on our company's website are
							distributed to our users through our advertising partners. The
							privacy policy principles in this agreement are intended only for
							the use of our Store and do not apply to third-party websites.
						</p>

						<p>
							EXCEPTIONAL CIRCUMSTANCES <br />
							In some cases, listed below, our company may disclose information
							about users to third parties, with the exception of the provisions
							of the "Privacy Policy". These cases are limited in number; <br />
							1. The Law, Regulations, etc. comply with the obligations imposed
							by the legal norms adopted by the competent legal authority;{' '}
							<br />
							2. In order to fulfill the requirements of the "Membership
							Agreement" and other agreements concluded by our store with users,
							and to implement them in practice; <br />
							3. Requesting information about users for the purpose of
							conducting an investigation or an investigation duly conducted by
							an authorized administrative and judicial body; <br />
							4. It is necessary to provide information to protect the rights or
							without danger of users.
						</p>

						<p>
							EMAIL SECURITY <br />
							Never write down your credit card number or passwords in emails
							that you send to our store's customer support regarding any of
							your orders. The information contained in the emails may be viewed
							by third parties. Under no circumstances can our company guarantee
							the security of the information transmitted from your emails.
						</p>

						<p>
							BROWSER COOKIES <br />
							Our company may receive information about users visiting our store
							and about the use of the website using a technical communication
							file (Cookie). The mentioned cookies are small text files that the
							website sends to the user's browser to be stored in the main
							memory. Cookies facilitate the use of the Internet by preserving
							the status and settings of the site.
						</p>

						<p>
							The technical communication file helps to get statistical
							information about how many people visit the site, for what
							purpose, how many times a day the site visits and how long it
							stays on the site, as well as dynamically generate advertising and
							content from specially designed user pages. Cookies are not
							intended to extract data or any other personal information from
							RAM or your email. Most browsers are initially designed to accept
							cookies . However, users can change the settings so that cookies
							do not arrive.
						</p>

						<p>
							{' '}
							Our company may change the provisions of this Privacy Policy at
							any time by posting it on the website, sending an email to users
							or publishing it on its website. If the terms of the Privacy
							Policy are changed, they will take effect from the date of
							publication.
						</p>
						<p>
							For any questions or suggestions regarding our privacy policy, you
							can send an email to support@livemeshop.com . You can find our
							company's contact information below.
						</p>

						<p>
							Company: Liveme <br />
							Address: Kyrgyzstan, Bishkek, Chuy 219 <br />
							Email address:{' '}
							<a href="mailto:support@livemeshop.com">
								support@livemeshop.com
							</a>{' '}
							<br />
							Tel: <a href="tel:+996 708 022 101">+996 708 022 101</a>
						</p>
					</>
				) : null}
			</div>
		</>
	)
}
export default Policy
