import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import moment from 'moment'

const styles = {
  title: {
    flex: 3
  },
  formControl: {
    flex: 3,
    margin: '2px',
    minWidth: 120,
  },
  add: {
    flex: 1,
    textAlign: 'right'
  }
}

let Top = (props) => (<AppBar position="static" color="default">
    <Toolbar>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <Typography variant="title" className={props.classes.title}>
          willhaben ppps
        </Typography>

        {props.weeks.length > 0 &&
        <FormControl className={props.classes.formControl}>
          <InputLabel htmlFor="week-select">Week</InputLabel>
          <Select native={true} onChange={(e) => props.onWeekSelected(e.target.value)}
                  inputProps={{id: 'week-select', name: 'week-select'}}>
            {props.weeks.map(w => (
              <option key={w} value={w}>{moment(w,'yyyy-ww').format("ww/YYYY")}</option>
            ))}
          </Select>

        </FormControl>



        }

      </div>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Top)