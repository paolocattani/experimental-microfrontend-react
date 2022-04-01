// You can write your own logic here to determine the actual url
//window.mf_loginUrl = 'https://frbbqyjw1ptv.compat.objectstorage.eu-frankfurt-1.oraclecloud.com/tecma-assets-coll/experimental_mf/mf_login';
//@ts-nocheck
window.mf_loginUrl = 'http://localhost:3002';
//@ts-nocheck
window.mf_privateUrl = 'http://localhost:3003';
// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');

export {};
