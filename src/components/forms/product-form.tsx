'use client';

import {
  FormEvent,
  useEffect,
  useState,
} from 'react';

import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
  ChangedEventArgs as DatePickEventArgs,
} from '@syncfusion/ej2-react-calendars';
import {
  ChangeEventArgs as DropDownEventArgs,
} from '@syncfusion/ej2-react-dropdowns';
import {
  ChangedEventArgs as TextEventArgs,
} from '@syncfusion/ej2-react-inputs';
import {
  ChangeEventArgs as RichTextEventArgs,
} from '@syncfusion/ej2-react-richtexteditor';

import apiCall, { baseUrl } from '../../utils/common.ts';
import MPDatePicker from '../ui/mpdatepicker.tsx';
import MPDropDown from '../ui/mpdropdown.tsx';
import FormSubmitButton from '../ui/mpformsubmitbutton.tsx';
import MPRichTextEdit from '../ui/mprichtextedit.tsx';
import MPTextBox from '../ui/mptextbox.tsx';

type Product = {
    sid: string;
    fid: number;
    tenant_sid: string;
    incep: Date;
    title: string;
    suite_sid: string;
    cdnm: string;
    own_sid: string;
    lic_sid: string;
    md_sid: string;
    categ_sid: string;
    descr: string;
    purp: string;
    mission: string;
    vision: string;
    is_del: boolean;
    cre_by_sid: string;
    cre_on_dt: Date;
    upd_by_sid: string;
    upd_on_dt: Date;
};

export default function ProductForm() {
  const { fid } = useParams();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  // Form input state
  const [incep, setIncep] = useState<Date>(new Date());
  const [title, setTitle] = useState<string>('');
  const [cdNm, setCdnm] = useState<string>('');
  const [suite, setSuite] = useState<string>('');
  const [own, setOwn] = useState<string>('');
  const [lic, setLic] = useState<string>('');
  const [md, setMd] = useState<string>('');
  const [categ, setCateg] = useState<string>('');
  const [descr, setDescr] = useState<string>('');
  const [purp, setPurp] = useState<string>('');
  const [mission, setMission] = useState<string>('');
  const [vision, setVision] = useState<string>('');

  // Form drop-down state
  const [suites, setSuites] = useState<string[]>([]);
  const [owners, setOwners] = useState<string[]>([]);
  const [licenses, setLicenses] = useState<string[]>([]);
  const [modes, setModes] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  async function getSuites() {
    const rs = await apiCall(`${baseUrl}/product/suite`);
    const suites1 = await rs.json();
    setSuites(suites1);
  }

  async function getOwners() {
    const rs = await apiCall(`${baseUrl}/product/owner`);
    const owners1 = await rs.json();
    setOwners(owners1);
  }

  async function getLicenses() {
    const rs = await apiCall(`${baseUrl}/product/license`);
    const licenses1 = await rs.json();
    setLicenses(licenses1);
  }

  async function getModes() {
    const rs = await apiCall(`${baseUrl}/product/mode`);
    const modes1 = await rs.json();
    setModes(modes1);
  }

  async function getCategories() {
    const rs = await apiCall(`${baseUrl}/product/category`);
    const categories1 = await rs.json();
    setCategories(categories1);
  }

  useEffect(() => {
    getSuites();
    getOwners();
    getLicenses();
    getModes();
    getCategories();

    setIsLoading(false);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const handleChangedIncep = (e: DatePickEventArgs) => {
    setIncep(new Date(e.value?.toString() || ''));
  };

  const handleChangedTitle = (e: TextEventArgs) => {
    setTitle(e.value?.toString() || '');
  };

  const handleChangedSuite = (e: DropDownEventArgs) => {
    setSuite(e.value.toString());
  };

  const handleChangedCdnm = (e: TextEventArgs) => {
    setCdnm(e.value?.toString() || '');
  };

  const handleChangedOwn = (e: DropDownEventArgs) => {
    setOwn(e.value.toString());
  };

  const handleChangedLic = (e: DropDownEventArgs) => {
    setLic(e.value.toString());
  };

  const handleChangedMd = (e: DropDownEventArgs) => {
    setMd(e.value.toString());
  };

  const handleChangedCateg = (e: DropDownEventArgs) => {
    setCateg(e.value.toString());
  };

  const handleChangedDescr = (e: RichTextEventArgs) => {
    setDescr(e.value);
  };

  const handleChangedPurp = (e: RichTextEventArgs) => {
    setPurp(e.value);
  };

  const handleChangedMission = (e: RichTextEventArgs) => {
    setMission(e.value);
  };

  const handleChangedVision = (e: RichTextEventArgs) => {
    setVision(e.value);
  };

  const newSid = uuidv4();
  const currentDateTime = new Date();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const product: Product = {
      sid: newSid,
      fid: 1,
      tenant_sid: newSid,
      incep: currentDateTime,
      title,
      suite_sid: suite,
      cdnm: cdNm,
      own_sid: own,
      lic_sid: lic,
      md_sid: md,
      categ_sid: categ,
      descr,
      purp,
      mission,
      vision,
      is_del: false,
      cre_by_sid: newSid,
      cre_on_dt: currentDateTime,
      upd_by_sid: newSid,
      upd_on_dt: currentDateTime,
    };

    const rp = await apiCall(`${baseUrl}/product`, product, 'POST');
    if (rp.status === 201) {
      navigate('/product/browse');
    }
  };

  const suiteFields = { text: 'nm', value: 'sid' };
  const ownerFields = { text: 'usr', value: 'sid' };
  const licenseFields = { text: 'nm', value: 'sid' };
  const modeFields = { text: 'nm', value: 'sid' };
  const categoryFields = { text: 'nm', value: 'sid' };

  return (
    <div>
      {fid ? (
        <h1>
          Product
          {' '}
          {fid}
          {' '}
          Profile
        </h1>
      ) : <h1>New Product</h1>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-3">
            <label htmlFor="inception">Inception</label>
            <MPDatePicker
              id="inception"
              value={incep}
              change={handleChangedIncep}
              readOnly={false}
            />
          </div>
          <div className="col-lg-3">
            <label htmlFor="title">Title</label>
            <MPTextBox
              id="title"
              value={title}
              change={handleChangedTitle}
              readOnly={false}
            />
          </div>
          <div className="col-lg-3">
            <label htmlFor="suite">Suite</label>
            <MPDropDown
              dataSource={suites}
              fields={suiteFields}
              id="suite"
              value={suite}
              change={handleChangedSuite}
              readOnly={false}
            />
          </div>
          <div className="col-lg-3">
            <label htmlFor="codeName">Code Name</label>
            <MPTextBox
              id="codeName"
              value={cdNm}
              change={handleChangedCdnm}
              readOnly={false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <label htmlFor="owner">Owner</label>
            <MPDropDown
              dataSource={owners}
              fields={ownerFields}
              id="owner"
              value={own}
              change={handleChangedOwn}
              readOnly={false}
            />
          </div>
          <div className="col-lg-3">
            <label htmlFor="license">License</label>
            <MPDropDown
              dataSource={licenses}
              fields={licenseFields}
              id="license"
              value={lic}
              change={handleChangedLic}
              readOnly={false}
            />
          </div>
          <div className="col-lg-3">
            <label htmlFor="mode">Mode</label>
            <MPDropDown
              dataSource={modes}
              fields={modeFields}
              id="mode"
              value={md}
              change={handleChangedMd}
              readOnly={false}
            />
          </div>
          <div className="col-lg-3">
            <label htmlFor="category">Category</label>
            <MPDropDown
              dataSource={categories}
              fields={categoryFields}
              id="category"
              value={categ}
              change={handleChangedCateg}
              readOnly={false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="description">Description</label>
            <MPRichTextEdit
              id="description"
              value={descr}
              change={handleChangedDescr}
              readOnly={false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="purpose">Purpose</label>
            <MPRichTextEdit
              id="purpose"
              value={purp}
              change={handleChangedPurp}
              readOnly={false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="mission">Mission</label>
            <MPRichTextEdit
              id="mission"
              value={mission}
              change={handleChangedMission}
              readOnly={false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label htmlFor="vision">Vision</label>
            <MPRichTextEdit
              id="vision"
              value={vision}
              change={handleChangedVision}
              readOnly={false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormSubmitButton caption="Save" />
          </div>
        </div>
      </form>
    </div>
  );
}
