// ===== CLASS STUDENT =====
class Student {
  constructor(family, middleName, name, birth, scores) {
    this.family = family;
    this.middleName = middleName;
    this.name = name;
    this.birth = birth;
    this.scores = scores;
  }

  // Lấy full name
  getFullName() {
    return `${this.family} ${this.middleName} ${this.name}`;
  }

  // Tính trung bình cộng điểm
  getAverageScore() {
    const sum = this.scores.reduce((a, b) => a + b, 0);
    return (sum / this.scores.length).toFixed(2);
  }

  // In ra ngày tháng năm sinh
  getBirthDate() {
    const { day, month, year } = this.birth;
    return `${day}/${month}/${year}`;
  }

  // Tính tuổi
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birth.year;
  }

  // Chuyển đối tượng thành JSON
  toJSON() {
    return {
      family: this.family,
      middleName: this.middleName,
      name: this.name,
      birth: this.birth,
      scores: this.scores,
    };
  }
}

// ===== TẠO 3 ĐỐI TƯỢNG STUDENT =====
let students = [
  new Student(
    "Trần",
    "Đức",
    "Minh",
    { day: 15, month: 2, year: 2004 },
    [10, 9, 8],
  ),
  new Student(
    "Trần",
    "Đức",
    "An",
    { day: 1, month: 6, year: 2004 },
    [8, 9, 10],
  ),
  new Student(
    "Lê",
    "Hoàng",
    "Bình",
    { day: 20, month: 3, year: 2002 },
    [5, 5, 5],
  ),
];

// ===== HIỂN THỊ JSON CỦA TỪNG STUDENT =====
console.log("===== JSON SINH VIÊN =====");
students.forEach((sv, index) => {
  console.log(`\n----- Student ${index + 1} -----`);
  console.log(JSON.stringify(sv.toJSON(), null, 2));
});

// ===== HIỂN THỊ THÔNG TIN CHI TIẾT =====
console.log("\n===== THÔNG TIN CHI TIẾT SINH VIÊN =====");
let html = "";

students.forEach((sv, index) => {
  console.log(`\n----- Sinh viên ${index + 1} -----`);
  console.log("Họ tên:", sv.getFullName());
  console.log("Ngày sinh:", sv.getBirthDate());
  console.log("Tuổi:", sv.getAge());
  console.log("Điểm:", sv.scores.join(", "));
  console.log("TBC:", sv.getAverageScore());

  html += `
        <p>
            <b>Sinh viên ${index + 1}</b><br>
            Họ tên: ${sv.getFullName()}<br>
            Ngày sinh: ${sv.getBirthDate()}<br>
            Tuổi: ${sv.getAge()}<br>
            Điểm: ${sv.scores.join(", ")}<br>
            TBC: ${sv.getAverageScore()}
        </p>
        <hr>
    `;
});

document.getElementById("result").innerHTML = html;
