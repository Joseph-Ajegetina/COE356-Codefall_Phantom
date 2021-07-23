import os
import shutil
from pathlib import Path
from flaskapp import config

BASE_FILE = lambda x: config.BASE_DIR.joinpath(x)
def file_rewrite(file, old, new):
    with open(file, 'r+') as f:
        data = f.read()
        if ("{%s}" % old) in data:
            data = data.replace("{%s}" % old, new)
            f.seek(0)
            f.write(data)
            f.truncate()

def get_random_secret_key(key_length=24):
    return os.urandom(key_length).hex()

def templates(dst, src, ctx):
    if not dst.exists():
        dst.mkdir()

    for f in src.glob('*'):
        if f.name.endswith('.pyc'):
            continue

        if f.is_dir():
            dst_dir = dst.joinpath(f.name)
            templates(dst_dir, f, ctx)
        else:    
            dst_path = dst.joinpath(f.name)
            shutil.copy(f, dst_path)
            file_rewrite(dst_path, "SECRET_KEY", get_random_secret_key())
            file_rewrite(dst_path, "PROJECT_NAME", ctx['name'])

def run(name, target_dir=None):
    if target_dir is None:
        target_dir = Path.cwd()

    project_dir = target_dir.joinpath(name) 
    if project_dir.exists():
        print("Already directory exists: '{:s}'".format(str(project_dir.resolve())))
        return

    ctx = {'name': name}
    templates(project_dir, config.BASE_DIR, ctx)
    print("Successed to make project dir: '{:s}'".format(str(project_dir.resolve())))
    
