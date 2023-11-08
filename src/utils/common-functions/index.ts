import { notification } from "@utils/notifications";
import { constRoute } from "@utils/route";
import { resetStore } from "@stores/root-store";
// import xls from "xlsx";
import * as xls from 'xlsx';
import * as FileSaver from 'file-saver';

// import { saveAs } from "file-saver";
import * as _ from "lodash";
export const addDebounce = (fn, delay) => {
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  })();
};

export const catchError = (
  error,
  at = "Mention Store Action Name To Track Error At:"
) => {
  console.log(`======================= Start =========================`);
  const { status, data } = error.response;
  console.log(
    "At:",
    at,
    " | status: ",
    status,
    `| error data: `,
    data
  );
  if(data?.message?.includes('Invalid token!')){
    localStorage.clear();
    window.location.reload();
    }

  if (status === 401) {
    notification.error(data?.error || data?.message);
  }
  
  if (status === 400) {
    notification.error(data?.error || data?.message);
  }
   if (status === 404) {
    notification.error(data?.error || data?.message);
  }
  
  data?.errors?.length > 0 &&
  data.errors?.forEach((item) => {
    notification.error(item?.msg);
  });
  console.log(`======================= End ========================= \n\n\n\n`);
};

export const onLogOutClearAll = (naviagte = null) => {
  localStorage.clear();
  naviagte(constRoute.login);
  resetStore();
};
export const truncate = function(str: string, length: number=16, ending: string='...') {
  if (str?.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};



export const sortCol = (a, b, dataIndex) => {
  if (a[dataIndex]?.length > 0 && b[dataIndex]?.length > 0) {
    return a[dataIndex].length - b[dataIndex].length;
  } else {
    return null;
  }
};
export const  s2ab=(s)=> {
  const buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
  const view = new Uint8Array(buf); //create uint8array as viewer
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
  return buf;
}

export const  fitToColumn=(arrayOfArray)=> {
  // get maximum character of each column
  return arrayOfArray[0].map((a, i) => ({
    wch: Math.max(
      ...arrayOfArray.map((a2) => (a2[i] ? a2[i].toString().length : 0))
    ),
  }));
}
export const generateExcel=(
  file_name,
  title,
  subject,
  sheet_name,
  author,
  headings,
  columns,
  file_data,
  footers = [""]
)=> {

  const arr=[];
 if(file_data?.length){
  file_data.map(item=>{
    const obj={};
   const keys =  Object.keys(item)
   keys.map(key=>{
    if(item[key]?.toString()) obj[key]=item[key]
    else obj[key] = ' '
    return null
   })
   arr.push(obj);
   return null
  })
 }
  const work_book = xls.utils.book_new();
  work_book.Props = {
    Title: title,
    Subject: subject,
    Author: author,
    CreatedDate: new Date(),
  };
  work_book.SheetNames.push(sheet_name);
  const sheet_data = xls.utils.aoa_to_sheet([
    ...headings,
    columns,
    ...arr?.map((row) => _.values(row)),
    footers,
  ]);
  sheet_data["!cols"] = fitToColumn([columns]);
  work_book.Sheets[sheet_name] = sheet_data;
  const work_book_export = xls.write(work_book, {
    bookType: "xlsx",
    type: "binary",
  });
  FileSaver.saveAs(
    new Blob([s2ab(work_book_export)], { type: "application/octet-stream" }),
    `${file_name}.xlsx`
  );
}
export const getvalidDateDMY=(date)=> {
  if(date === '' || date === undefined){
    return '';
  }else{
  const resdate = new Date(date);
  const year = resdate.getFullYear();
  const month =
    (resdate.getMonth() + 1).toString().length === 1
      ? "0" + (resdate.getMonth() + 1)
      : (resdate.getMonth() + 1).toString();
  const day =
    resdate.getDate().toString().length === 1
      ? "0" + resdate.getDate()
      : resdate.getDate().toString();
  return day + "-" + month + "-" + year;
  }
}

export function getSingleUrlParam(
  location: any,
  name: string
): string | undefined {
  const params = new URLSearchParams(location.search);
  return params.get(name);
}