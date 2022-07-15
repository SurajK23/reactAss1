// var url =
//   "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
async function myData() {
  const response = await axios.get(
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
  );
  console.log(response.data);
  DataAll = response.data;
  for (let Data of DataAll) {
    // console.log(Data);
    // $(".data-row").html();
    // let Data = {
    //   address: {
    //     city: "Nauvoo",
    //     state: "NE",
    //     streetAddress: "322 Amet Dr",
    //     zip: "97605",
    //   },
    //   // [[Prototype]]: Object
    //   description:
    //     "sed pharetra sed tortor amet tellus donec convallis porttitor etiam elementum amet consequat nec dolor ante nec molestie elementum suspendisse amet nullam vitae pulvinar elementum at in pretium lorem sed sit sollicitudin",
    //   email: "LPeacock@tempor.org",
    //   firstName: "Shaneka",
    //   id: 543,
    //   lastName: "Studenka",
    //   phone: "(480)120-8715",
    // };
    $("tbody").append(`<tr class='data-row class${Data.id}'></tr>`);
    const tr = document.querySelector(`.class${Data.id}`);
    // const tr = $(`.class${Data.id}${Data.lastname}`);
    // let idl = Data.id;
    tr.addEventListener("click", () => {
      // this.style("display: block");
      $("#info-content").css("display", "block");
      $(".active").removeClass("active");
      $(`.class${Data.id}`).addClass("active");
      $(".uName").html(`<b>User Selected : </b> ${Data.firstName}`);
      $(".desc").html(
        `<b>Description : </b><br><div class="dsecrip"> ${Data.description}</div>`
      );
      // $("textarea").html(`<span>${Data.description}</span>`);
      $(".addr").html(`<b>Address : </b> ${Data.address.streetAddress}`);
      $(".state").html(`<b>State : </b> ${Data.address.state}`);
      $(".city").html(`<b>City : </b> ${Data.address.city}`);
      $(".zip").html(`<b>Zip : </b> ${Data.address.zip}`);
      // console.log("yes clicked", idl);
    });
    // tr.classList.add("newTR");
    // // $("tr").addClass("data-row");
    // // console.log("hello");

    $(tr).append(`<td class='column1'>${Data.id}</td>`);
    // // // $(`.${Data.id}`).addClass("column1");
    $(tr).append(`<td class='column2 fn${Data.id}'>${Data.firstName}</td>`);
    // // // $(`.${Data.id}`).addClass("column2");
    $(tr).append(`<td class='column3'>${Data.lastName}</td>`);
    // // // $(`.${Data.id}`).addClass("column3");
    $(tr).append(`<td class='column4'>${Data.email}</td>`);
    // // // $(`.${Data.id}`).addClass("column4");
    $(tr).append(`<td class='column5'>${Data.phone}</td>`);
    //..............................................................
    $("input").on("keyup", () => {
      let value = $("input").val().toLowerCase();

      $("tbody tr").each(() => {
        let str = $(`.fn${Data.id}`).text().toLowerCase();
        if (str.indexOf(value) != -1) {
          $(`.fn${Data.id}`).parent().show();
        } else {
          $(`.fn${Data.id}`).parent().hide();
        }
      });
    });
  }

  // }
  // $(".column10").html(Data.id);
  // $(".column20").html(Data.firstName);
  // $(".column30").html(Data.lastName);
  // $(".column40").html(Data.email);
  // $(".column50").html(Data.phone);
  // }
}

myData();
