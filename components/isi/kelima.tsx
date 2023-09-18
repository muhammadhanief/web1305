import React from "react";
import Image from "next/image";
import Tabel5_1 from "@/public/assets/img/content/tabel 5.1.png";

const kelima = () => {
  return (
    <div className="indent-8">
      <p>
        Indeks keparahan kemiskinan merupakan indeks yang memberikan informasi
        tentang penyebaran pengeluaran di antara penduduk miskin. Indeks ini
        berguna untuk melihat tingkat keparahan kemiskinan yang ditunjukkan oleh
        ketimpangan rata-rata pengeluaran di antara penduduk miskin. Nilai
        indeks yang semakin tinggi menunjukkan semakin tinggi pula ketimpangan
        pengeluaran di antara penduduk miskin. BPS mencatat indeks keparahan
        kemiskinan pada Maret 2019 s.d. Maret 2023 mengalami pasang surut dimana
        dari tahun 2019 sampai tahun 2021 terus mengalami kenaikan dan menuruk
        di tahun 2022 dan 2023. Jika dilihat menurut wilayah perkotaan dan
        pedesaan, indeks keparahan di tahun 2023 untuk wilayah perkotaan sebesar
        0.28 dan pedesaan 0.51. Dari nilai indeks ini dapat disimpulkan
        ketimpangan rata-rata pengeluaran di antara penduduk miskin di pedesaan
        lebih tinggi dari pada wilayah perkotaan.{" "}
      </p>
      <div>
        <Image className="rounded-lg" src={Tabel5_1} alt="Tabel 5.1" />
      </div>
    </div>
  );
};

export default kelima;
