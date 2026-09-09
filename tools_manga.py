import cv2, numpy as np
from PIL import Image

def lineart(bgr, small=480, blk=13, C=6, out_w=1400):
    h, w = bgr.shape[:2]
    s = small / max(h, w)
    im = cv2.resize(bgr, (max(1,int(w*s)), max(1,int(h*s))), interpolation=cv2.INTER_AREA)
    for _ in range(4):
        im = cv2.bilateralFilter(im, 9, 90, 90)
    g = cv2.medianBlur(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY), 7)
    e = cv2.adaptiveThreshold(g, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, blk, C)
    e = cv2.resize(e, (out_w, int(out_w*e.shape[0]/e.shape[1])), interpolation=cv2.INTER_CUBIC)
    _, e = cv2.threshold(e, 140, 255, cv2.THRESH_BINARY)
    return e.astype(np.float32)/255

def flat_gray(bgr, out_w=1400):
    h, w = bgr.shape[:2]
    s = 700 / max(h, w)
    im = cv2.resize(bgr, (int(w*s), int(h*s)), interpolation=cv2.INTER_AREA)
    for _ in range(4):
        im = cv2.bilateralFilter(im, 9, 90, 90)
    g = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)
    g = cv2.resize(g, (out_w, int(out_w*g.shape[0]/g.shape[1])), interpolation=cv2.INTER_CUBIC)
    return g.astype(np.float32)/255

def halftone(v, pitch=10.0, angle=45.0, maxr=0.62):
    h, w = v.shape
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    a = np.deg2rad(angle)
    du = ((xx*np.cos(a) + yy*np.sin(a)) % pitch) - pitch/2
    dt = ((-xx*np.sin(a) + yy*np.cos(a)) % pitch) - pitch/2
    r = np.sqrt(du*du + dt*dt)
    rad = np.clip(1.0 - v, 0, 1) * (pitch*maxr)
    return 1.0 - (r <= rad).astype(np.float32)

def manga(path, out_w=1400, pitch=10.0, beta=0.20, tone_hi=0.82, small=480, blk=13, C=6):
    """写真を漫画調（線画＋ベタ＋網点）に変換する"""
    bgr = cv2.imread(path, cv2.IMREAD_COLOR)
    line = lineart(bgr, small=small, blk=blk, C=C, out_w=out_w)
    v = flat_gray(bgr, out_w=out_w)
    v = cv2.resize(v, (line.shape[1], line.shape[0]))
    ht = halftone(v, pitch=pitch)
    out = np.ones_like(v)
    out = np.where(v < tone_hi, ht, out)      # 中間調は網点
    out = np.where(v < beta, 0.0, out)        # 一番暗いところはベタ
    out = np.minimum(out, line)               # 線を重ねる
    return Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8)).convert('RGB')
