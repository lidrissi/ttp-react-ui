
import en from './en';
import fr from './fr';
import nl from './nl';


export const messages = {
  en,
  fr,
  nl
};

export default function (id) {

  let lng = localStorage.getItem("lng") || 'fr';

  return messages[lng][id] && 0 !== messages[lng][id].length ? messages[lng][id] : id;
};
