<template>
  <div class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          ระบบค้นหาลำดับลงทะเบียนนิสิต <br />
          วิศวฯ จุฬาฯ 2561
        </h1>
        <br />
        <h2 class="subtitle">
          <input
            class="input"
            v-model="studentid"
            placeholder="รหัสนิสิต"
            minlength="10"
            maxlength="10"
          />
          <div>
            <br />
            <strong>ลำดับลงทะเบียนของคุณคือ: </strong> {{ order }} <br />
            <br />
            <div class="content">
              <ul id="cueng" v-if="reginfo">
                <li>
                  กลุ่มที่ {{ reginfo.main.กลุ่ม }} รหัสกลุ่มรายวิชา
                  {{ reginfo.main.รหัสกลุ่ม }}
                </li>
                <li>
                  วิชา 5500112 Exp Eng II ตอนเรียนที่ {{ reginfo.expeng.เซ็ค }}
                </li>
                <template v-if="reginfo.cp">
                  <li v-for="text in reginfo.cp.texts" :key="text.id">
                    {{ text }}
                  </li>
                </template>
              </ul>
            </div>
            <br />
            <a
              class="is-size-6"
              href="https://drive.google.com/file/d/13wUZiAR_-86gOrtiKmuz_AMYGo4Smihb/view?usp=sharing"
            >
              สามารถขอรหัสลงทะเบียนได้ที่อาจารย์ที่ปรึกษาของตน <br />
              สามารถตรวจสอบรายชื่ออาจารย์ที่ปรึกษาได้ <span>ที่นี่</span>
            </a>
            <br />
            <br />
            <a
              class="is-size-6"
              href="https://www.facebook.com/งานทะเบียนและประเมินผล-คณะวิศวกรรมศาสตร์-จุฬาฯ-1656445181234187"
            >
              ติดตามข้อมูลเพิ่มเติมได้ที่ <br />
              <span> เพจ งานทะเบียนและประเมินผล คณะวิศวกรรมศาสตร์ จุฬาฯ </span>
            </a>
          </div>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import getdata from "./getdata.js";
export default {
  name: "home",
  data() {
    return {
      studentid: "",
      // studentid: "6131001521",
      // studentid: "6130009421",
      database: require("./database.json")
    };
  },
  computed: {
    order() {
      return this.database[this.studentid] || "";
    },
    reginfo() {
      if (!this.order) return null;
      return getdata(this.order);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: ChulaNew;
}
.hero {
  display: -webkit-flex; /* Safari */
  -webkit-align-items: center; /* Safari 7.0+ */
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    141deg,
    #45bf89 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
}
.hero-body {
  max-width: 500px;
}
a span {
  text-decoration: underline;
}
// @media only screen and (max-width: 375px) {
// content ul#cueng {
//   margin-left: 1em !important;
// }
// }
</style>
