// رابط الـ API الخاص بك على Apidog
const API_URL = 'https://mock.apidog.com/m1/1363688-1367672-default/doctors';

let allDoctors = []; // لتخزين بيانات الأطباء والبحث فيها

// جلب البيانات من الـ API عند تحميل الصفحة
async function fetchDoctors() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        allDoctors = Array.isArray(data) ? data : (data.doctors || []);
        displayDoctors(allDoctors);
    } catch (error) {
        console.error('خطأ في جلب البيانات:', error);
        document.getElementById('doctorsGrid').innerHTML = 
            <p style="text-align: center; color: #ef4444; grid-column: 1/-1; font-weight: bold;">
                عذراً، حدث خطأ في تحميل بيانات الأطباء. يرجى التحقق من الاتصال.
            </p>;
    }
}

// دالة عرض الأطباء على الشاشة
function displayDoctors(doctorsList) {
    const grid = document.getElementById('doctorsGrid');
    
    if (!grid) return;

    if (doctorsList.length === 0) {
        grid.innerHTML = <p style="text-align: center; color: #64748b; grid-column: 1/-1;">لا يوجد أطباء مطابقين للبحث.</p>;
        return;
    }

    grid.innerHTML = doctorsList.map(doc => 
        <div class="doctor-card" style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); display: flex; flex-direction: column; border: 1px solid #f1f5f9; transition: transform 0.3s;">
            <div style="padding: 1.5rem 1.5rem 0.5rem; text-align: center; background: linear-gradient(to bottom, #f0f9ff, #ffffff);">
                <img src="${doc.image || 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80'}" alt="${doc.name || 'طبيب'}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 4px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 0 auto;">
            </div>
            <div style="padding: 1.25rem; text-align: center; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <h3 style="font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 0.25rem;">${doc.name || 'د. غير متوفر'}</h3>
                    <div style="color: #0ea5e9; font-size: 0.95rem; font-weight: 600; margin-bottom: 0.75rem;">${doc.specialty || 'استشاري'}</div>
                    <div style="display: flex; justify-content: space-around; background: #f8fafc; padding: 8px; border-radius: 10px; font-size: 0.85rem; color: #64748b; margin-bottom: 1rem;">
                        <div><i class="fa-solid fa-star" style="color: #f59e0b;"></i> ${doc.rating || '4.8'}</div>
                        <div><i class="fa-solid fa-user-doctor"></i> ${doc.experience || 'خبرة 10 سنوات'}</div>
                    </div>
                </div>
                <div>
                    <div style="font-size: 1.1rem; font-weight: 800; color: #1e293b; margin-bottom: 1rem;">${doc.price || '200'} ر.س <span style="color: #10b981; font-size: 0.9rem; font-weight: 600;">/ الكشفية</span></div>
                    <button onclick="openModal('${doc.name || 'الطبيب'}')" style="background-color: #0ea5e9; color: white; border: none; padding: 0.75rem; border-radius: 10px; font-weight: 700; cursor: pointer; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <i class="fa-regular fa-calendar-check"></i> احجز موعد
                    </button>
                </div>
            </div>
        </div>
    ).join('');
}

// نظام البحث الفوري
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allDoctors.filter(doc => 
            (doc.name && doc.name.toLowerCase().includes(term)) || 
            (doc.specialty && doc.specialty.toLowerCase().includes(term))

                                           // إدارة نافذة الحجز (Modal)
const modal = document.getElementById('bookingModal');
let selectedDoctorName = '';

function openModal(doctorName) {
    selectedDoctorName = doctorName;
    const titleEl = document.getElementById('modalDoctorTitle');
    if (titleEl) titleEl.innerText = حجز موعد مع ${doctorName};
    if (modal) modal.classList.add('active');
}

function closeModal() {
    if (modal) modal.classList.remove('active');
    const form = document.getElementById('bookingForm');
    if (form) form.reset();
}

// معالجة نموذج الحجز وتأكيد الفاتورة باسم "حجوزاتي"
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const patientName = document.getElementById('patientName').value;
        
        closeModal();
        showToast(تم تأكيد حجزك بنجاح عبر تطبيق (حجوزاتي) يا ${patientName}!);
    });
}

// إظهار رسالة الـ Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    const messageEl = document.getElementById('toastMessage');
    if (toast && messageEl) {
        messageEl.innerText = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}

//
        تشغيل جلب البيات عند بدء التشغيل
fetchDoctors();
        );
        displayDoctors(filtered);
    });
}
