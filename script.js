// جلب قائمة الأطباء والمواعيد
async function fetchDoctors() {
    try {
        const response = await fetch('https://mock.apidog.com/m1/1363688-1367672-default/doctors');
        const doctors = await response.json();
        console.log('الأطباء المتاحون:', doctors);
    } catch (error) {
        console.error('خطأ في جلب البيانات:', error);
    }
}

fetchDoctors();
