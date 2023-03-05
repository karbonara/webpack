import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import Advantages from "../../widgets/Advantages";
import GameMain from "../../widgets/GamesMain";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Advantages />
          <div className="b-catalog b-catalog--mainpage js-tab">
            <div className="b-catalog__tabs js-custom-scrollbar">
              <div
                className="b-catalog__tabs-item js-tab-button active"
                data-tab-index={1}
              >
                Новинки
              </div>
              <div className="b-catalog__tabs-item js-tab-button" data-tab-index={2}>
                {" "}
                Лидеры продаж
              </div>
              <div className="b-catalog__tabs-item js-tab-button" data-tab-index={3}>
                Последние поступления
              </div>
              <div className="b-catalog__tabs-item js-tab-button" data-tab-index={4}>
                Предзаказы{" "}
              </div>
            </div>
            <div
              className="b-catalog__tab-container active js-tab-content"
              data-tab-index={1}
            >


              <GameMain />
              <div className="b-catalog__tab-link">
                <a className="btn btn--primary" href="/newgames">
                  Cмотреть&nbsp;все
                </a>
              </div>
            </div>
            <div
              className="b-catalog__tab-container js-tab-content"
              data-tab-index={2}
            >
              <div className="b-catalog__tab-wrapper js-custom-scrollbar">
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/dead-cells-return-to-castlevania"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/1YhjHh5wj_HB9XwGcjmc4IRuLvRxjrw8.jpg"
                      alt="Dead Cells: Return to Castlevania"
                      data-image="https://static.gabestore.ru/product/1YhjHh5wj_HB9XwGcjmc4IRuLvRxjrw8.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5501}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/dead-cells-return-to-castlevania"
                  >
                    Dead Cells: Return to Castlevania
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">385 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5501}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/stellaris-first-contact-story-pack"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/9biOqoQT81mRWhSh7Abm2COZQwEwK-PP.jpg"
                      alt="Stellaris: First Contact Story Pack"
                      data-image="https://static.gabestore.ru/product/9biOqoQT81mRWhSh7Abm2COZQwEwK-PP.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5634}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/stellaris-first-contact-story-pack"
                  >
                    Stellaris: First Contact Story Pack
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">550 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5634}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/resident-evil-4-deluxe-edition"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/jE7An_dshEYB3DbNUMS8Kw7SpGddkm9l.jpg"
                      alt="Resident Evil 4 Deluxe Edition"
                      data-image="https://static.gabestore.ru/product/jE7An_dshEYB3DbNUMS8Kw7SpGddkm9l.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5009}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/resident-evil-4-deluxe-edition"
                  >
                    Resident Evil 4 Deluxe Edition
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">5199 ₽</div>
                    <div className="shop-item__price-discount">4%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5009}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/hearts-of-iron-iv-cadet-edition"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/iGZ7xd0wcHgeDwFF7gvDVuP2KbZM_K2K.jpg"
                      alt="Hearts of Iron IV: Cadet Edition"
                      data-image="https://static.gabestore.ru/product/iGZ7xd0wcHgeDwFF7gvDVuP2KbZM_K2K.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={278}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/hearts-of-iron-iv-cadet-edition"
                  >
                    Hearts of Iron IV: Cadet Edition
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">499 ₽</div>
                    <div className="shop-item__price-discount">62%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={278}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/cyberpunk-2077">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/6GWqttg2TfPsWSnjwz_1k96aXLS7JDO5.jpg"
                      alt="Cyberpunk 2077"
                      data-image="https://static.gabestore.ru/product/6GWqttg2TfPsWSnjwz_1k96aXLS7JDO5.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={2407}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/cyberpunk-2077">
                    Cyberpunk 2077
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">2999 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={2407}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/elden-ring">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/BTSHt0FqzLsehuG_s_flC1D6m1QNanOc.jpg"
                      alt="ELDEN RING"
                      data-image="https://static.gabestore.ru/product/BTSHt0FqzLsehuG_s_flC1D6m1QNanOc.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={3645}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/elden-ring">
                    ELDEN RING
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">3999 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={3645}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/hogwarts-legacy-deluxe-edition-sng"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/kmJVmCLrFnvODzkdt2MNGBk8aEj0Zqiy.jpg"
                      alt="Hogwarts Legacy Deluxe Edition (СНГ, кроме РФ и РБ)"
                      data-image="https://static.gabestore.ru/product/kmJVmCLrFnvODzkdt2MNGBk8aEj0Zqiy.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5515}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/hogwarts-legacy-deluxe-edition-sng"
                  >
                    Hogwarts Legacy Deluxe Edition (СНГ, кроме РФ и РБ)
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">2999 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5515}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/resident-evil-7">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/9tOIVykQu71GzhuV2zaOzG5ABXpxEum2.jpg"
                      alt="Resident Evil 7"
                      data-image="https://static.gabestore.ru/product/9tOIVykQu71GzhuV2zaOzG5ABXpxEum2.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={360}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/resident-evil-7">
                    Resident Evil 7
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">499 ₽</div>
                    <div className="shop-item__price-discount">50%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={360}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/barotrauma">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/Hz629DwPtv6EtvXcnaVFo2F7ZkrvuX8p.jpg"
                      alt="Barotrauma"
                      data-image="https://static.gabestore.ru/product/Hz629DwPtv6EtvXcnaVFo2F7ZkrvuX8p.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={2393}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/barotrauma">
                    Barotrauma
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">399 ₽</div>
                    <div className="shop-item__price-discount">64%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={2393}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/gothic-universe-edition"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/_g132xgHRfaKsS-53eoxe95rkLiLIpmU.jpg"
                      alt="Gothic Universe Edition"
                      data-image="https://static.gabestore.ru/product/_g132xgHRfaKsS-53eoxe95rkLiLIpmU.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={375}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/gothic-universe-edition">
                    Gothic Universe Edition
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">99 ₽</div>
                    <div className="shop-item__price-discount">67%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={375}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
              </div>
              <div className="b-catalog__tab-link">
                <a className="btn btn--primary" href="/top">
                  Cмотреть&nbsp;все
                </a>
              </div>
            </div>
            <div
              className="b-catalog__tab-container js-tab-content"
              data-tab-index={3}
            >
              <div className="b-catalog__tab-wrapper js-custom-scrollbar">
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/the-red-lantern">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/OY52PqpcdnTNKWK6JPfnnwKIIC5d1YC7.jpg"
                      alt="The Red Lantern"
                      data-image="https://static.gabestore.ru/product/OY52PqpcdnTNKWK6JPfnnwKIIC5d1YC7.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5654}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/the-red-lantern">
                    The Red Lantern
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">465 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5654}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/snk-heroines-tag-team-frenzy"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/gceh9YXhSpxIW557HYcwCVv-pbMx7xLb.jpg"
                      alt="SNK HEROINES Tag Team Frenzy"
                      data-image="https://static.gabestore.ru/product/gceh9YXhSpxIW557HYcwCVv-pbMx7xLb.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5650}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/snk-heroines-tag-team-frenzy"
                  >
                    SNK HEROINES Tag Team Frenzy
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">399 ₽</div>
                    <div className="shop-item__price-discount">57%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5650}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/lego-star-wars-the-skywalker-saga-sng-krome-rf-i-rb"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/WFyqZuv6C8_r2IDWLhvgsyQvTqPnju7M.jpg"
                      alt="LEGO Star Wars: The Skywalker Saga (СНГ, кроме РФ и РБ)"
                      data-image="https://static.gabestore.ru/product/WFyqZuv6C8_r2IDWLhvgsyQvTqPnju7M.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5647}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/lego-star-wars-the-skywalker-saga-sng-krome-rf-i-rb"
                  >
                    LEGO Star Wars: The Skywalker Saga (СНГ, кроме РФ и РБ)
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">2199 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5647}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/dreadeye-vr">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/ZY_RZOjdisYFekeMhndxYXks9-Y686rp.jpg"
                      alt="DreadEye VR"
                      data-image="https://static.gabestore.ru/product/ZY_RZOjdisYFekeMhndxYXks9-Y686rp.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5630}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/dreadeye-vr">
                    DreadEye VR
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">89 ₽</div>
                    <div className="shop-item__price-discount">54%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5630}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/superfuse-supporter-edition"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/tqLJHP552pvQqIdDSuVQ6U39J_BO3ewD.jpg"
                      alt="Superfuse Supporter Edition"
                      data-image="https://static.gabestore.ru/product/tqLJHP552pvQqIdDSuVQ6U39J_BO3ewD.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5626}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/superfuse-supporter-edition"
                  >
                    Superfuse Supporter Edition
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">1318 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5626}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/per-aspera">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/tQv5OteCndqbyhJMso4jNZfoLJMUzI40.jpg"
                      alt="Per Aspera"
                      data-image="https://static.gabestore.ru/product/tQv5OteCndqbyhJMso4jNZfoLJMUzI40.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5623}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/per-aspera">
                    Per Aspera
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">549 ₽</div>
                    <div className="shop-item__price-discount">9%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5623}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/ancient-aliens-the-game"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/OgPqucZfCRGL8ox6Xma37ooe7ZgU5iSD.jpg"
                      alt="Ancient Aliens: The Game"
                      data-image="https://static.gabestore.ru/product/OgPqucZfCRGL8ox6Xma37ooe7ZgU5iSD.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5622}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/ancient-aliens-the-game">
                    Ancient Aliens: The Game
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">369 ₽</div>
                    <div className="shop-item__price-discount">15%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5622}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/asterix-obelix-slap-them-all"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/_5I7KczoKCKA2iexBegPT1oTdo7-Ei30.jpg"
                      alt="Asterix & Obelix: Slap them All!"
                      data-image="https://static.gabestore.ru/product/_5I7KczoKCKA2iexBegPT1oTdo7-Ei30.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5621}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/asterix-obelix-slap-them-all"
                  >
                    Asterix &amp; Obelix: Slap them All!
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">699 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5621}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/my-fantastic-ranch">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/rPY_Rihs1QZur2TRlFhHDanp85axmtFb.jpg"
                      alt="My Fantastic Ranch"
                      data-image="https://static.gabestore.ru/product/rPY_Rihs1QZur2TRlFhHDanp85axmtFb.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5618}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/my-fantastic-ranch">
                    My Fantastic Ranch
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">699 ₽</div>
                    <div className="shop-item__price-discount">36%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5618}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/zorro-the-chronicles">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/yMDCZxlJ3N8mJL2_B7qeHz7Ov2Pd-Mxf.jpg"
                      alt="Zorro The Chronicles"
                      data-image="https://static.gabestore.ru/product/yMDCZxlJ3N8mJL2_B7qeHz7Ov2Pd-Mxf.jpg"
                    />
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5617}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/zorro-the-chronicles">
                    Zorro The Chronicles
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">399 ₽</div>
                    <div className="shop-item__price-discount">33%</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5617}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
              </div>
              <div className="b-catalog__tab-link">
                <a className="btn btn--primary" href="/newgames">
                  Cмотреть&nbsp;все
                </a>
              </div>
            </div>
            <div
              className="b-catalog__tab-container js-tab-content"
              data-tab-index={4}
            >
              <div className="b-catalog__tab-wrapper js-custom-scrollbar">
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/dead-cells-return-to-castlevania"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/1YhjHh5wj_HB9XwGcjmc4IRuLvRxjrw8.jpg"
                      alt="Dead Cells: Return to Castlevania"
                      data-image="https://static.gabestore.ru/product/1YhjHh5wj_HB9XwGcjmc4IRuLvRxjrw8.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5501}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/dead-cells-return-to-castlevania"
                  >
                    Dead Cells: Return to Castlevania
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">385 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5501}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/pathfinder-wrath-of-the-righteous-the-last-sarkorians"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/hfir4BsyGx2OIR3gBvMyXR8CAd98DEHE.jpg"
                      alt="Pathfinder: Wrath of the Righteous - The Last Sarkorians"
                      data-image="https://static.gabestore.ru/product/hfir4BsyGx2OIR3gBvMyXR8CAd98DEHE.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5522}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/pathfinder-wrath-of-the-righteous-the-last-sarkorians"
                  >
                    Pathfinder: Wrath of the Righteous - The Last Sarkorians
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">369 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5522}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a
                    className="shop-item__image"
                    href="/game/stellaris-first-contact-story-pack"
                  >
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/9biOqoQT81mRWhSh7Abm2COZQwEwK-PP.jpg"
                      alt="Stellaris: First Contact Story Pack"
                      data-image="https://static.gabestore.ru/product/9biOqoQT81mRWhSh7Abm2COZQwEwK-PP.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5634}
                      data-modal="login"
                    />
                  </a>
                  <a
                    className="shop-item__name"
                    href="/game/stellaris-first-contact-story-pack"
                  >
                    Stellaris: First Contact Story Pack
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">550 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5634}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/tchia-epic-games">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/tnB3IPdqwjuwL7EFbL_9XdmqvzwXrR_8.jpg"
                      alt="Tchia (Epic Games)"
                      data-image="https://static.gabestore.ru/product/tnB3IPdqwjuwL7EFbL_9XdmqvzwXrR_8.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5652}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/tchia-epic-games">
                    Tchia (Epic Games)
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">2149 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5652}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/resident-evil-4">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/kreF116A7OWus946fQRLcRrCQ_5Qwdw3.jpg"
                      alt="Resident Evil 4"
                      data-image="https://static.gabestore.ru/product/kreF116A7OWus946fQRLcRrCQ_5Qwdw3.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5008}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/resident-evil-4">
                    Resident Evil 4
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">4599 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5008}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
                <div className="shop-item">
                  <a className="shop-item__image" href="/game/the-last-of-us-part-i">
                    <img
                      className="lazyload"
                      src="https://static.gabestore.ru/product/orXO_BEJKbwpoBJl_msPpvL6FXlfEvZi.jpg"
                      alt="The Last of Us Part I"
                      data-image="https://static.gabestore.ru/product/orXO_BEJKbwpoBJl_msPpvL6FXlfEvZi.jpg"
                    />
                    <div className="shop-item__label">Предзаказ</div>
                    <div
                      className="shop-item__favorite js-modal-open "
                      data-item-id={5269}
                      data-modal="login"
                    />
                  </a>
                  <a className="shop-item__name" href="/game/the-last-of-us-part-i">
                    The Last of Us Part I
                  </a>
                  <div className="shop-item__price">
                    <div className="shop-item__price-current">3999 ₽</div>
                  </div>
                  <a
                    className="btn btn--primary js-addToCart "
                    href="/basket"
                    data-item-id={5269}
                  >
                    В&nbsp;корзину
                  </a>
                </div>
              </div>
              <div className="b-catalog__tab-link">
                <a className="btn btn--primary" href="/preorders">
                  Cмотреть&nbsp;все
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default Home;