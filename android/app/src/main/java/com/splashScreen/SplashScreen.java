package com.splashScreen;

import android.app.Activity;
import android.app.Dialog;
import android.view.Window;
import android.view.WindowManager;

import com.awesomeproject.R;

import java.lang.ref.WeakReference;

public class SplashScreen {

    private static int NULL_ID = 0;
    private static Dialog mSplashDialog;
    private static WeakReference<Activity> mActivity;

    /**
     * 打开启动屏
     */
    public static void show(final Activity activity, final boolean fullScreen, final int themeResId){
        if (activity==null) return;
        mActivity = new WeakReference<Activity>(activity);
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!activity.isFinishing()) {
                    mSplashDialog = new Dialog(
                            activity,
                            themeResId != NULL_ID ? themeResId
                                    : fullScreen ? R.style.AppTheme
                                    : R.style.AppTheme
                    );
//                    mSplashDialog.requestWindowFeature(Window.FEATURE_NO_TITLE);//去除标题
//                    mSplashDialog.getWindow().setFlags(
//                            WindowManager.LayoutParams.FLAG_FULLSCREEN,
//                            WindowManager.LayoutParams.FLAG_FULLSCREEN
//                    );//全屏显示
                    mSplashDialog.setContentView(R.layout.layout);
                    mSplashDialog.setCancelable(false);
                    if (!mSplashDialog.isShowing()) {
                        mSplashDialog.show();
                    }
                }
            }
        });
    }

    /**
     * 打开启动屏
     */
    public static void show(final Activity activity, final boolean fullScreen) {
        show(activity, fullScreen, 0);
    }

    /**
     * 打开启动屏
     */
    public static void show(final Activity activity) {
        show(activity, false);
    }

    /**
     * 关闭启动屏
     */
    public static void hide(Activity activity) {
        if (activity == null) {
            if (mActivity == null) {
                return;
            }
            activity = mActivity.get();
        }
        if (activity == null) return;

        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (mSplashDialog != null && mSplashDialog.isShowing()) {
                    mSplashDialog.dismiss();
                    mSplashDialog = null;
                }
            }
        });
    }

}

