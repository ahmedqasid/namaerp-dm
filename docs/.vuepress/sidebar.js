export const SIDEBAR_CONFIG = {
  "/" : [ {
    text: "Home",
    collapsible: true,
    children: [ {
      text: "Modules",
      collapsible: true,
      children: [ "/modules/accounting/", "/modules/ai/", "/modules/auditing/", "/modules/basic/", "/modules/srvcenter/", "/modules/system-tables/" ]
    } ]
  } ]
}