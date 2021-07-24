from pathlib import Path
p = Path(__file__)

ROOT_DIR = p.parent.resolve()
BASE_DIR = ROOT_DIR.joinpath('base')
TEMP_DIR = ROOT_DIR.joinpath('temp')

if __name__ == '__main__':
    _locals = dict(locals())
    for k, v in _locals.items():
        if '_DIR' in k:
            print(k, ':', v)

