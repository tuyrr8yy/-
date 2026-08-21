// جلب قائمة الأطباء والمواعيد
async function fetchDoctors() {
    try {
        const response = await fetch('https://api.example.com/doctors');
        const doctors = await response.json();
        console.log('الأطباء المتاحون:', doctors);
    } catch (error) {
        console.error('خطأ في جلب البيانات:', error);
    }
}

fetchDoctors();
