
export function getThesisPage(pageNumber) {
    const page = thisisPages.find((pageObj) => pageObj.pageNumber === pageNumber);
    return page ? page.url : null;
}




const thisisPages = [
    { pageNumber: 1, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690199208/mind-space/thesis/EBook_01_small_1_apxeg5.jpg" },
    { pageNumber: 2, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218376/mind-space/thesis/EBook_02_small_2_wf2i5w.jpg" },
    { pageNumber: 3, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218376/mind-space/thesis/EBook_03_small_iro8sq.jpg" },
    { pageNumber: 4, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218465/mind-space/thesis/EBook_04_small_htd8ta.jpg" },
    { pageNumber: 5, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218465/mind-space/thesis/EBook_05_small_pysk1c.jpg" },
    { pageNumber: 6, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218466/mind-space/thesis/EBook_06_small_dsykcz.jpg" },
    { pageNumber: 7, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218467/mind-space/thesis/EBook_07_small_cjgblg.jpg" },
    { pageNumber: 8, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218466/mind-space/thesis/EBook_08_small_cmleay.jpg" },
    { pageNumber: 9, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218464/mind-space/thesis/EBook_09_small_sk1710.jpg" },
    { pageNumber: 10, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690218464/mind-space/thesis/EBook_10_small_b0p6oa.jpg" },
    { pageNumber: 11, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222469/mind-space/thesis/EBook_11_small_y2zosr.jpg" },
    { pageNumber: 12, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222470/mind-space/thesis/EBook_12_small_tqnoma.jpg" },
    { pageNumber: 13, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222469/mind-space/thesis/EBook_13_small_eyl8ax.jpg" },
    { pageNumber: 14, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222471/mind-space/thesis/EBook_14_small_uy8nix.jpg" },
    { pageNumber: 15, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222468/mind-space/thesis/EBook_15_small_ik9xnu.jpg" },
    { pageNumber: 16, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222469/mind-space/thesis/EBook_16_small_ivkjo9.jpg" },
    { pageNumber: 17, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222467/mind-space/thesis/EBook_17_small_wrfws6.jpg" },
    { pageNumber: 18, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222467/mind-space/thesis/EBook_18_small_xryysh.jpg" },
    { pageNumber: 19, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222466/mind-space/thesis/EBook_19_small_ilinuj.jpg" },
    { pageNumber: 20, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222466/mind-space/thesis/EBook_20_small_wnyomo.jpg" },
    { pageNumber: 21, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222466/mind-space/thesis/EBook_21_small_rmnoxg.jpg" },
    { pageNumber: 22, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222466/mind-space/thesis/EBook_22_small_v7qtej.jpg" },
    { pageNumber: 23, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222465/mind-space/thesis/EBook_23_small_uklwvz.jpg" },
    { pageNumber: 24, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222465/mind-space/thesis/EBook_24_small_dje8i0.jpg" },
    { pageNumber: 25, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690222464/mind-space/thesis/EBook_25_small_sck1bc.jpg" },
    { pageNumber: 26, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223235/mind-space/thesis/EBook_26_small_gkmaoi.jpg" },
    { pageNumber: 27, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223237/mind-space/thesis/EBook_27_small_eig625.jpg" },
    { pageNumber: 28, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223231/mind-space/thesis/EBook_28_small_elbj0q.jpg" },
    { pageNumber: 29, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223233/mind-space/thesis/EBook_29_small_vzkp2o.jpg" },
    { pageNumber: 30, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223231/mind-space/thesis/EBook_30_small_p99ojx.jpg" },
    { pageNumber: 31, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223233/mind-space/thesis/EBook_31_small_w8krwl.jpg" },
    { pageNumber: 32, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223231/mind-space/thesis/EBook_32_small_nkuhme.jpg" },
    { pageNumber: 33, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223235/mind-space/thesis/EBook_33_small_mdzn9p.jpg" },
    { pageNumber: 34, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223233/mind-space/thesis/EBook_34_small_vjg9o1.jpg" },
    { pageNumber: 35, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223232/mind-space/thesis/EBook_35_small_w4u0t3.jpg" },
    { pageNumber: 36, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223236/mind-space/thesis/EBook_36_small_oafwyu.jpg" },
    { pageNumber: 37, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223237/mind-space/thesis/EBook_37_small_rm6uja.jpg" },
    { pageNumber: 38, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223233/mind-space/thesis/EBook_38_small_qwol4v.jpg" },
    { pageNumber: 39, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223236/mind-space/thesis/EBook_39_small_zrfvcm.jpg" },
    { pageNumber: 40, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223232/mind-space/thesis/EBook_40_small_bw4bej.jpg" },
    { pageNumber: 41, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223238/mind-space/thesis/EBook_41_small_m6ghuz.jpg" },
    { pageNumber: 42, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223235/mind-space/thesis/EBook_42_small_xv6zc8.jpg" },
    { pageNumber: 43, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223236/mind-space/thesis/EBook_43_small_brojea.jpg" },
    { pageNumber: 44, url: "https://res.cloudinary.com/de3pvycqi/image/upload/v1690223237/mind-space/thesis/EBook_44_small_kcv64f.jpg" },
];
