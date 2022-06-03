// import module
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// import component
import ItemCard from '../ItemCard';
import SettingsInfos from './SettingsInfos';
import ButtonUI from '../ButtonUI';
import ButtonFav from '../ButtonFav';

// import actions
import { actionsToggleInfos } from '../../actions/toggle';
import { actionGetOnePro } from '../../actions/search';
import { actionDelFavorites, actionAddFavorites, actionGetFavorites } from '../../actions/user';

// style
import './style.scss';

// import images :
import addFav from '../../assets/images/addFav.png';
import removeFav from '../../assets/images/removeFav.png';
// import { resolve } from 'core-js/fn/promise';

export default function DisplayCompany() {
  const dispatch = useDispatch();

  const { idPro } = useParams();
  // console.log('Id Company : ', idPro);

  // State
  const company = useSelector((state) => state.appLvl.oneCompany);
  // console.log('State oneCompany : ', company);
  const { settingsInfos } = useSelector((state) => state.toggle);
  const { token } = useSelector((state) => state.authent);
  const mainImg = company.image;
  // console.log('mainImg : ', mainImg);

  // Functions handle
  const handleClickInfos = () => {
    dispatch(actionsToggleInfos(settingsInfos));
  };

  const { favorite } = useSelector((state) => state.user);
  // console.log('favorite : ', favorite);
  const checkFav = favorite.find((el) => el.company_id === Number(idPro));
  // console.log('favorite check : ', checkFav);

  const handleAddFav = () => {
    const actionAdd = {
      company_id: idPro,
    };
    dispatch(actionAddFavorites(actionAdd));
    return toast.success('Favoris ajouté !', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const handleDelFav = () => {
    const idFav = checkFav.favorite_id;
    dispatch(actionDelFavorites(idFav));
    return toast.success('Favoris supprimé !', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  useEffect(() => {
    dispatch(actionGetOnePro(idPro));
  }, [token]);

  useEffect(() => {
    dispatch(actionGetFavorites());
  }, []);

  const pathImageCheck = checkFav ? removeFav : addFav;
  // console.log('pathImageCheck : ', pathImageCheck);

  const handleFav = checkFav ? handleDelFav : handleAddFav;
  // console.log(handleFav);

  // const resolvePromise = new Promise((resolve) => setTimeout(resolve, 3000));
  // const notify = () => {
  //   toast.promise(
  //     resolvePromise, // c'est ça qui résoud la promesse
  //     {
  //       pending: 'Ajout aux Favoris en cours !',
  //       success: 'Favoris aujouté 👌',
  //       error: 'Erreur, veuillez réessayer svp 🤯',
  //     },
  //   );
  // };

  const classname = settingsInfos ? 'displaycompany__dropinfos displaycompany__dropinfos--active' : 'displaycompany__dropinfos';

  return (

    <div className="displaycompany">

      <div className="displaycompany__container-head">
        {/* block image and title */}
        <div className="displaycompany__avatar">
          <div className="displaycompany__avatar__img">
            {
              company.image && company.image !== 'default' && <img src={company.image} alt={company.name} />
            }
          </div>
          {/* <h2 className="displaycompany__title">

        </h2> */}
        </div>

        <div className={classname}>
          <ButtonUI type="button" className="displaycompany__dropinfos--toggle" onClick={handleClickInfos}><p>{company.name}</p></ButtonUI>
          <div className="displaycompany__dropinfos__container">
            {/* block information sheet with component */}
            <SettingsInfos
              company={company}
            />
          </div>
        </div>

        <ButtonFav
          pathImage={pathImageCheck}
          fav={handleFav}
        // onClick={notify}
        />
      </div>

      <div className="displaycompany__com">
        <div className="displaycompany__com--title">
          {/* Communication */}
        </div>
        <div className="displaycompany__com__desc">
          {company.communication}
        </div>
      </div>
      {/* Select filter */}
      {/* <div className="displaycompany__filter">
        <div>
          Sélection
        </div> */}
      {/* <select name="filter" id="filter-select">
          <option value="">Filtres</option>
          <option value="price+">Prix croissant</option>
          <option value="price-">Prix décroissant</option>
          <option value="fruits">Fruits</option>
          <option value="vegetable">Légumes</option>
        </select> */}
      {/* </div> */}

      {/* Block product with component ItemCard */}
      <div className="displaycompany__product">
        {company.product.map((product) => (
          <ItemCard
            key={product.id}
            id={product.id}
            name={product.name}
            type={product.type}
            price={product.price}
            priceUnit={product.price_kg}
            detail={product.detail}
            src={product.image}
          />
        ))}
      </div>
      {/*
      <div>
        <ButtonFav
          pathImage={pathImageCheck}
          fav={handleFav}
          // onClick={notify}
        />
      </div> */}
    </div>
  );
}
