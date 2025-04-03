// 生成随机4位数字验证码
function generateCaptcha() {
    const captcha = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('captcha-code').textContent = captcha;
    return captcha;
}

// 初始化验证码
let currentCaptcha = generateCaptcha();

// 刷新验证码
document.getElementById('refresh-captcha').addEventListener('click', function() {
    currentCaptcha = generateCaptcha();
});

// 表单提交
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captcha = document.getElementById('captcha').value;
    
    if (username.trim() === '') {
        alert('请输入账号');
        return;
    }
    
    if (password.trim() === '') {
        alert('请输入密码');
        return;
    }
    
    if (captcha.trim() === '') {
        alert('请输入验证码');
        return;
    }
    
    if (captcha !== currentCaptcha.toString()) {
        alert('验证码错误，请重新输入');
        currentCaptcha = generateCaptcha();
        return;
    }
    
    // 这里可以添加实际的登录逻辑
    console.log('登录信息：', { username, password });
    alert('登录成功！');
});